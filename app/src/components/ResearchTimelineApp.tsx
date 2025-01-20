import React, { useState } from 'react';
import {
  DocumentTextIcon,
  BeakerIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface TimelineItem {
  year: number;
  title: string;
  description: string;
  color: string;
  link: string;
}

const ResearchTimelineApp: React.FC = () => {
  // We'll have three main sections in the sidebar:
  //   1) coverage  -> "Current Model Coverage"
  //   2) naming    -> "Notebook Naming Convention"
  //   3) colab     -> "Interactive Colab Notebooks"
  const [activeSection, setActiveSection] = useState<string>('coverage');

  // Updated references in the timeline
  // You can click each timeline milestone if you want to implement that.
  // Right now they are static items displayed on the left panel.
  const timelineData: TimelineItem[] = [
    {
      year: 2020,
      title: 'Li et al. (2020)',
      description: 'Fourier Neural Operator for parametric PDEs',
      color: 'bg-blue-100',
      link: 'https://arxiv.org/abs/2010.08895'
    },
    {
      year: 2019,
      title: 'Lu et al. (2019)',
      description: 'DeepONet: Learning nonlinear operators for PDEs',
      color: 'bg-green-100',
      link: 'https://arxiv.org/abs/1910.03193'
    },
    {
      year: 2022,
      title: 'Fresca & Manzoni (2022)',
      description: 'POD-DL-ROM for nonlinear PDEs',
      color: 'bg-purple-100',
      link: 'https://www.sciencedirect.com/science/article/pii/S0045782521005120'
    },
    {
      year: 2021,
      title: 'Pant et al. (2021)',
      description: 'Deep learning for reduced-order fluid sims',
      color: 'bg-red-100',
      link: 'https://arxiv.org/abs/2107.04556'
    }
  ];

  // Renders main content for whichever section is active.
  const renderContent = () => {
    switch (activeSection) {
      case 'coverage':
        // Display the "Current Model Coverage" from your README
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Current Model Coverage</h2>
            <div className="space-y-4 text-sm">
              <p>
                <strong>Li, Z., Kovachki, N., Azizzadenesheli, K., Liu, B., Bhattacharya, K., 
                Stuart, A., &amp; Anandkumar, A. (2020).</strong> Fourier neural operator 
                for parametric partial differential equations. <em>arXiv preprint</em> 
                <a 
                  href="https://arxiv.org/abs/2010.08895"
                  className="text-blue-600 hover:underline ml-1"
                >
                  arXiv:2010.08895
                </a>
              </p>
              <p>
                <strong>Lu, L., Jin, P., &amp; Karniadakis, G. E. (2019).</strong> Deeponet: 
                Learning nonlinear operators for identifying differential equations 
                based on the universal approximation theorem of operators. 
                <em>arXiv preprint</em> 
                <a
                  href="https://arxiv.org/abs/1910.03193"
                  className="text-blue-600 hover:underline ml-1"
                >
                  arXiv:1910.03193
                </a>
              </p>
              <p>
                <strong>Fresca, S., &amp; Manzoni, A. (2022).</strong> POD-DL-ROM: Enhancing 
                deep learning-based reduced order models for nonlinear parametrized PDEs 
                by proper orthogonal decomposition. <em>Computer Methods in Applied 
                Mechanics and Engineering, 388, 114181.</em> 
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S0045782521005120"
                  className="text-blue-600 hover:underline ml-1"
                >
                  Paper
                </a>
              </p>
              <p>
                <strong>Pant, P., Doshi, R., Bahl, P., &amp; Barati Farimani, A. (2021).</strong> 
                Deep learning for reduced order modelling and efficient temporal evolution 
                of fluid simulations. <em>Physics of Fluids, 33(10).</em> 
                <a
                  href="https://arxiv.org/abs/2107.04556"
                  className="text-blue-600 hover:underline ml-1"
                >
                  Paper
                </a>
              </p>
            </div>
          </div>
        );

      case 'naming':
        // Display the "Notebook Naming Convention" section
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Notebook Naming Convention</h2>
            <p>
              In order to facilitate ease of navigation and comprehension, a standard 
              naming schema has been adopted for the Jupyter notebooks:
            </p>
            <pre className="bg-gray-100 p-4 my-4 text-sm rounded">
{`[Model]_[Equation/Problem+Dimension]_[TAG].ipynb`}
            </pre>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>Model:</strong> Represents the computational model or algorithm 
                under study (e.g., FNO, DLROM).
              </li>
              <li>
                <strong>Equation/Problem+Dimension:</strong> Specifies the mathematical 
                problem or equation being solved along with its spatial dimensions 
                (e.g., Burgers1D, NOAA2D).
              </li>
              <li>
                <strong>TAG:</strong> An optional identifier providing supplementary 
                context or categorizing the notebook’s difficulty level or specific 
                focus (e.g., Intro, Advanced, DataPrep).
              </li>
            </ul>
          </div>
        );

      case 'colab':
        // Display the "Interactive Colab Notebooks" section
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Interactive Colab Notebooks</h2>
            <p className="mb-4">
              For users interested in a more interactive learning experience, Google 
              Colab versions of these tutorials are available:
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <span role="img" aria-label="Notebook">📔</span>{' '}
                <a
                  href="https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/FNO_Burgers1D.ipynb"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FNO_Burgers1D
                </a>
              </li>
              <li>
                <span role="img" aria-label="Notebook">📔</span>{' '}
                <a
                  href="https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/DeepONet_Burgers1D.ipynb"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DeepONet_Burgers1D
                </a>
              </li>
              <li>
                <span role="img" aria-label="Notebook">📔</span>{' '}
                <a
                  href="https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/POD-DL-ROM_Burgers1D.ipynb"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  POD-DL-ROM_Burgers1D
                </a>
              </li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar with Timeline */}
      <div className="w-80 bg-white shadow-md overflow-y-auto">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold">Reduced-Order Modeling</h1>
        </div>
        
        {/* Navigation Menu */}
        <nav className="p-4 border-b">
          {[
            { name: 'coverage', label: 'Current Model Coverage', icon: DocumentTextIcon },
            { name: 'naming',   label: 'Notebook Naming Convention', icon: BeakerIcon },
            { name: 'colab',    label: 'Colab Notebooks', icon: ChartBarIcon }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveSection(item.name)}
              className={`flex items-center w-full p-3 mb-2 rounded-lg text-left ${
                activeSection === item.name
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-6 h-6 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Timeline Section */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Timeline of Papers</h2>
          <div className="relative border-l-4 border-gray-300 pl-4">
            {timelineData.map((item, index) => (
              <div key={index} className="mb-6 relative">
                {/* Year bubble */}
                <div
                  className={`absolute -left-[26px] w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}
                >
                  <span className="font-bold">{item.year}</span>
                </div>
                {/* Paper info */}
                <div className="ml-16 bg-white p-4 rounded-lg shadow-sm border">
                  <h3 className="font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-600 text-xs underline"
                  >
                    View Paper
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResearchTimelineApp;
