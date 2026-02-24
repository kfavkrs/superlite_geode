import { useState, useEffect } from 'react';
import { useWizard } from '../../context/WizardContext';
import { CheckCircle2, Loader2, Link as LinkIcon, Share2, FilePlus } from 'lucide-react';

export default function Step7_Publish() {
    const { setStep } = useWizard();
    const [pipelineState, setPipelineState] = useState(0);

    // Mocking the pipeline stages
    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current++;
            setPipelineState(current);
            if (current >= 6) {
                clearInterval(interval);
            }
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    const steps = [
        { label: 'Saving content to project', done: pipelineState > 0 },
        { label: 'Optimizing images (3 images, saved 2.1MB)', done: pipelineState > 1 },
        { label: 'Building site (12.3s)', done: pipelineState > 2 },
        { label: 'Committing to Git (→ "Add blog post: Building Custom NFC...")', done: pipelineState > 3 },
        { label: 'Pushing to GitHub', done: pipelineState > 4 },
        { label: 'Deploying to GitHub Pages...', done: pipelineState > 5, pending: pipelineState === 5 },
    ];

    const handleCreateAnother = () => {
        // Reset wizard and go back to step 1
        // A full reset would require an action in context, but for now we just change step
        setStep(1);
    };

    if (pipelineState >= 6) {
        // SUCCESS SCREEN
        return (
            <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto w-full pb-8">
                <div className="w-20 h-20 bg-green-100 text-success rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-extrabold text-text-primary mb-2">Published Successfully!</h2>
                <p className="text-text-secondary mb-8 text-center text-lg">
                    Your post is now live and ready for the world.
                </p>

                <div className="w-full border border-border rounded-xl p-6 bg-bg-secondary shadow-sm mb-8">
                    <div className="flex justify-between items-center bg-bg-primary border border-border rounded-lg p-3 px-4 mb-4">
                        <span className="text-text-primary font-medium text-sm truncate mr-4">
                            https://superlite.netlify.app/blog/building-nfc
                        </span>
                        <button className="text-accent hover:text-blue-600 font-medium text-sm shrink-0 flex items-center gap-1">
                            <LinkIcon size={14} /> Copy
                        </button>
                    </div>

                    <h3 className="font-bold text-text-primary mb-3 text-sm uppercase">Publishing Summary</h3>
                    <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex justify-between"><span>Build time:</span> <span className="font-medium text-text-primary">12.3 seconds</span></li>
                        <li className="flex justify-between"><span>Images optimized:</span> <span className="font-medium text-text-primary">3 (saved 2.1MB)</span></li>
                        <li className="flex justify-between"><span>Commit:</span> <span className="font-mono text-xs bg-bg-primary px-1.5 py-0.5 rounded border border-border">a7b3c9d</span></li>
                        <li className="flex justify-between"><span>Deploy time:</span> <span className="font-medium text-text-primary">47 seconds</span></li>
                    </ul>
                </div>

                <div className="flex gap-4 w-full">
                    <button className="flex-1 bg-bg-primary border border-border text-text-primary hover:bg-bg-secondary transition-colors font-medium rounded-xl py-3 flex items-center justify-center gap-2">
                        <Share2 size={18} /> Share
                    </button>
                    <button
                        onClick={handleCreateAnother}
                        className="flex-[2] bg-accent text-white hover:bg-blue-600 transition-colors font-medium rounded-xl py-3 flex items-center justify-center gap-2 shadow-sm"
                    >
                        <FilePlus size={18} /> Create Another
                    </button>
                </div>
            </div>
        );
    }

    // PUBLISHING PROGRESS SCREEN
    return (
        <div className="flex flex-col h-full max-w-2xl mx-auto w-full pt-8">
            <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold text-text-primary mb-2">Publishing Pipeline</h2>
                <p className="text-text-secondary">
                    Hold tight, we are optimizing and deploying your content.
                </p>
            </div>

            <div className="border border-border rounded-xl p-8 bg-bg-primary shadow-sm">
                <div className="space-y-5">
                    {steps.map((stage, idx) => {
                        const isActive = pipelineState === idx;
                        const isDone = stage.done;
                        const isPending = stage.pending || isActive;

                        if (idx > pipelineState) return null; // Hide future steps

                        return (
                            <div key={idx} className={`flex items-start gap-4 ${isDone ? 'opacity-70' : ''}`}>
                                <div className="mt-0.5">
                                    {isDone && !stage.pending ? (
                                        <CheckCircle2 size={20} className="text-success" />
                                    ) : isPending ? (
                                        <Loader2 size={20} className="text-accent animate-spin" />
                                    ) : (
                                        <div className="w-5 h-5 rounded-full border-2 border-border" />
                                    )}
                                </div>
                                <div className={`font-medium ${isDone && !stage.pending ? 'text-text-secondary line-through decoration-gray-300' : 'text-text-primary'}`}>
                                    {stage.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Progress Bar */}
                <div className="mt-10">
                    <div className="flex justify-between text-xs font-bold text-text-secondary uppercase mb-2">
                        <span>Overall Progress</span>
                        <span>{Math.round((pipelineState / 6) * 100)}%</span>
                    </div>
                    <div className="w-full bg-border h-2.5 rounded-full overflow-hidden">
                        <div
                            className="bg-accent h-full transition-all duration-500 ease-out"
                            style={{ width: `${(pipelineState / 6) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 text-center">
                <button className="text-sm font-medium text-text-secondary hover:text-text-primary underline transition-colors">
                    View Detailed Log
                </button>
            </div>
        </div>
    );
}
