import { useState } from 'react';
import { useWizard } from '../../context/WizardContext';
import { Monitor, Smartphone, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function Step6_FinalPreview() {
    const { state } = useWizard();
    const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

    return (
        <div className="flex flex-col h-full w-full pb-4">
            <div className="mb-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-text-primary mb-1">Final Preview</h2>
                <p className="text-text-secondary text-center">
                    Verify everything before it goes live on the site.
                </p>
            </div>

            {/* View Toggles */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => setViewMode('desktop')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-colors border ${viewMode === 'desktop' ? 'bg-bg-primary border-border shadow-sm text-text-primary' : 'bg-transparent border-transparent text-text-secondary hover:text-text-primary'}`}
                >
                    <Monitor size={18} /> Desktop View
                </button>
                <button
                    onClick={() => setViewMode('mobile')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-colors border ${viewMode === 'mobile' ? 'bg-bg-primary border-border shadow-sm text-text-primary' : 'bg-transparent border-transparent text-text-secondary hover:text-text-primary'}`}
                >
                    <Smartphone size={18} /> Mobile View
                </button>
            </div>

            {/* Preview Container */}
            <div className="flex-1 flex justify-center overflow-hidden bg-bg-secondary border border-border rounded-xl p-8 shadow-inner relative">
                <div className={`transition-all duration-300 bg-white border border-border shadow-md overflow-hidden flex flex-col
           ${viewMode === 'mobile' ? 'w-[375px] rounded-[2rem] border-8 border-gray-800 h-[667px]' : 'w-full max-w-5xl rounded-lg h-full'}`}
                >
                    {/* Mock Site Header */}
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center text-gray-400">
                        <div className="font-bold text-gray-800 tracking-tight">Superlite<span className="text-blue-600">.</span></div>
                        <div className="flex gap-4 text-xs">
                            <span>Work</span>
                            <span>Blog</span>
                            <span>About</span>
                        </div>
                    </div>

                    {/* Mock Site Content */}
                    <div className="flex-1 overflow-y-auto p-8">
                        <div className={`${viewMode === 'mobile' ? 'w-full' : 'max-w-2xl mx-auto'}`}>
                            <h1 className={`${viewMode === 'mobile' ? 'text-2xl' : 'text-4xl'} font-extrabold text-gray-900 mb-4 tracking-tight`}>
                                Building a Custom NFC Card with 3D Printing
                            </h1>
                            <div className="flex gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
                                <span>March 15, 2024</span>
                                <span className="flex gap-2">
                                    <span className="text-blue-600">#3D-printing</span>
                                    <span className="text-blue-600">#NFC</span>
                                </span>
                            </div>
                            <div className={`w-full bg-gray-100 rounded-xl mb-6 flex items-center justify-center text-gray-400 ${viewMode === 'mobile' ? 'h-48' : 'h-80'}`}>
                                [ Hero Image: final-card.png ]
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                I recently decided to upgrade my standard business cards to something a bit more tech-forward. Since I have a Prusa MK3S+ and a bunch of NTAG215 chips lying around, I figured: why not 3D print an NFC card?
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The process was surprisingly straightforward. I modeled a thin card in Fusion 360, added a pause at the specific Z-height where the chip pocket was, dropped the chip in mid-print, and let it seal over.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Warnings & Status */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl flex items-start gap-3">
                    <AlertTriangle size={20} className="shrink-0 mt-0.5 text-amber-600" />
                    <div>
                        <p className="font-medium text-sm">Target Publication Date: March 15, 2024</p>
                        <p className="text-xs mt-1 opacity-80">
                            Because this date is in the past, it will be inserted into the timeline chronologically, NOT at the top of your feed.
                        </p>
                    </div>
                </div>
                <div className="flex-1 bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl flex items-center justify-center gap-2">
                    <CheckCircle2 size={20} className="text-green-600" />
                    <span className="font-bold">Ready to Publish!</span>
                </div>
            </div>
        </div>
    );
}
