import { useWizard } from '../../context/WizardContext';
import { FileText, Image as ImageIcon } from 'lucide-react';

export default function Step1_ContentType() {
    const { state, updateState, nextStep } = useWizard();

    const handleSelect = (type: 'blog' | 'project') => {
        updateState({ contentType: type });
        nextStep();
    };

    return (
        <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Choose Content Type</h2>
            <p className="text-text-secondary mb-8 text-center">
                What kind of update are you making to the portfolio today?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <button
                    onClick={() => handleSelect('blog')}
                    className={`group flex flex-col items-center justify-center p-12 border-2 rounded-xl transition-all duration-200 
            ${state.contentType === 'blog'
                            ? 'border-accent bg-blue-50/50'
                            : 'border-border bg-bg-primary hover:border-accent hover:shadow-sm'
                        }`}
                >
                    <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Blog Post</h3>
                    <p className="text-sm text-text-secondary text-center">
                        Write an article, tutorial, or narrative post for your timeline.
                    </p>
                </button>

                <button
                    onClick={() => handleSelect('project')}
                    className={`group flex flex-col items-center justify-center p-12 border-2 rounded-xl transition-all duration-200 
            ${state.contentType === 'project'
                            ? 'border-accent bg-blue-50/50'
                            : 'border-border bg-bg-primary hover:border-accent hover:shadow-sm'
                        }`}
                >
                    <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ImageIcon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Project Gallery</h3>
                    <p className="text-sm text-text-secondary text-center">
                        Upload images and details for a new portfolio piece.
                    </p>
                </button>
            </div>

            {/* Draft Resume Placeholder */}
            <div className="mt-12 text-center text-sm text-text-secondary">
                <button className="underline hover:text-accent transition-colors">
                    Resume incomplete draft
                </button>
            </div>
        </div>
    );
}
