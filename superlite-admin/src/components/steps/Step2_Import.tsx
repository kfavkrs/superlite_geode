import { useState } from 'react';
import { useWizard } from '../../context/WizardContext';
import { UploadCloud, Link as LinkIcon, PenLine, Loader2 } from 'lucide-react';

export default function Step2_Import() {
    const { updateState, nextStep } = useWizard();
    const [url, setUrl] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleStartFromScratch = () => {
        // We already have a blank state, just move forward
        nextStep();
    };

    const handleUrlFetch = async () => {
        if (!url) return;
        setIsFetching(true);
        // Simulate fetch delay
        setTimeout(() => {
            setIsFetching(false);
            nextStep();
        }, 1500);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const droppedFiles = Array.from(e.dataTransfer.files);
            // Store the files in the wizard state and move to next step
            updateState({ images: droppedFiles });
            nextStep();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Import Content</h2>
            <p className="text-text-secondary mb-8 text-center">
                Choose how you want to bring your content in.
            </p>

            <div className="flex flex-col gap-6 w-full">
                {/* Drag & Drop Area */}
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-8 transition-colors cursor-pointer flex flex-col items-center justify-center text-center group ${isDragging ? 'border-accent bg-blue-50/50' : 'border-border hover:border-accent hover:bg-blue-50/30'}`}
                >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${isDragging ? 'text-accent bg-blue-100' : 'bg-bg-secondary text-text-secondary group-hover:text-accent group-hover:bg-blue-100'}`}>
                        <UploadCloud size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">Drag & Drop Files Here</h3>
                    <p className="text-sm text-text-secondary">
                        Drop images, text files, or markdown directly into the app.
                    </p>
                </div>

                {/* URL Import */}
                <div className="border border-border rounded-xl p-6 bg-bg-primary shadow-sm hover:border-accent transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-text-primary font-medium">
                        <LinkIcon size={20} className="text-accent" />
                        Import from URL
                    </div>
                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="https://imgur.com/a/... or GitHub repo"
                            className="flex-1 bg-bg-secondary border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button
                            onClick={handleUrlFetch}
                            disabled={!url || isFetching}
                            className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[100px] justify-center"
                        >
                            {isFetching ? <Loader2 size={18} className="animate-spin" /> : 'Fetch'}
                        </button>
                    </div>
                    <p className="text-xs text-text-secondary mt-3">
                        Supported: Imgur albums, GitHub repositories, Direct image URLs.
                    </p>
                </div>

                {/* Start from scratch */}
                <div
                    onClick={handleStartFromScratch}
                    className="border border-border rounded-xl p-6 bg-bg-primary shadow-sm hover:border-accent hover:bg-blue-50/10 transition-colors cursor-pointer flex items-center justify-between group"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-bg-secondary rounded-lg flex items-center justify-center text-text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                            <PenLine size={20} />
                        </div>
                        <div>
                            <h3 className="text-text-primary font-medium">Start from scratch</h3>
                            <p className="text-sm text-text-secondary mt-1">Open the editor with a blank slate</p>
                        </div>
                    </div>
                    <div className="text-text-secondary group-hover:text-accent font-medium">
                        Open Editor →
                    </div>
                </div>
            </div>
        </div>
    );
}
