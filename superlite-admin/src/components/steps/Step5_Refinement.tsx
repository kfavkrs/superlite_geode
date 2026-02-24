import { useState } from 'react';
import { useWizard } from '../../context/WizardContext';
import { SplitSquareHorizontal, Edit3, Image as ImageIcon, Send } from 'lucide-react';

export default function Step5_Refinement() {
    const { state, updateState } = useWizard();
    const [isMarkdown, setIsMarkdown] = useState(false);

    return (
        <div className="flex flex-col h-full w-full pb-4">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-accent rounded-full flex items-center justify-center">
                        <Edit3 size={20} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-text-primary">Edit & Preview</h2>
                        <p className="text-sm text-text-secondary">Refine your final content.</p>
                    </div>
                </div>
                <div className="text-xs text-text-secondary font-medium flex items-center gap-1.5 bg-bg-secondary px-3 py-1.5 rounded-full border border-border">
                    Auto-save: <span>Just now</span> <span className="text-success">✓</span>
                </div>
            </div>

            <div className="flex-1 flex gap-6 overflow-hidden min-h-[500px]">
                {/* Left Column: Editor */}
                <div className="flex-1 flex flex-col gap-4 overflow-y-auto border border-border rounded-xl p-5 bg-bg-primary shadow-sm h-full max-h-full">
                    <div className="space-y-4">
                        {/* Title */}
                        <div>
                            <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Title</label>
                            <input
                                type="text"
                                defaultValue="Building a Custom NFC Card with 3D Printing"
                                className="w-full text-lg font-bold bg-bg-secondary border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                        </div>

                        {/* Description & Metadata row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Date & Time</label>
                                <input
                                    type="datetime-local"
                                    className="w-full text-sm bg-bg-secondary border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Tags</label>
                                <div className="w-full text-sm bg-bg-secondary border border-border rounded-lg px-3 py-2 flex gap-2">
                                    <span className="text-accent bg-blue-100 px-2 rounded-sm text-xs">3D-printing</span>
                                    <span className="text-text-secondary">...</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col mt-4 min-h-[300px]">
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-xs font-bold text-text-secondary uppercase">Content Body</label>
                                <div className="flex gap-2">
                                    <button className="text-xs px-2 py-1 rounded bg-bg-secondary border border-border hover:bg-border text-text-primary transition-colors flex items-center gap-1">
                                        <ImageIcon size={12} /> Manage Images
                                    </button>
                                    <button
                                        onClick={() => setIsMarkdown(!isMarkdown)}
                                        className="text-xs px-2 py-1 rounded bg-bg-secondary border border-border hover:bg-border text-text-primary transition-colors"
                                    >
                                        Toggle {isMarkdown ? 'Rich Text' : 'Markdown'}
                                    </button>
                                </div>
                            </div>

                            <textarea
                                className="flex-1 w-full p-4 bg-bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none font-mono text-sm leading-relaxed"
                                defaultValue="I recently decided to upgrade my standard business cards to something a bit more tech-forward. Since I have a Prusa MK3S+ and a bunch of NTAG215 chips lying around, I figured: why not 3D print an NFC card?"
                                placeholder="Start writing..."
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Live Preview Pane */}
                <div className="flex-1 border border-border rounded-xl bg-bg-primary shadow-sm h-full max-h-full flex flex-col overflow-hidden">
                    <div className="bg-bg-secondary border-b border-border px-4 py-2 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                            <SplitSquareHorizontal size={16} /> Live Preview
                        </div>
                        <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-accent font-medium">
                            Desktop View
                        </div>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto bg-white article-preview-container">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Building a Custom NFC Card with 3D Printing</h1>
                        <div className="flex gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
                            <span>March 15, 2024</span>
                            <span className="flex gap-2">
                                <span className="text-blue-600">#3D-printing</span>
                                <span className="text-blue-600">#NFC</span>
                            </span>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            I recently decided to upgrade my standard business cards to something a bit more tech-forward. Since I have a Prusa MK3S+ and a bunch of NTAG215 chips lying around, I figured: why not 3D print an NFC card?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
