# Reduced Order Modeling Tutorials

## Table of Contents
1. [Background and Objectives](#background-and-objectives)
2. [Installation and Requirements](#installation-and-requirements)
3. [Notebook Naming Convention](#notebook-naming-convention)
4. [Interactive Colab Notebooks](#interactive-colab-notebooks)
5. [Code Attribution and References](#code-attribution-and-references)
6. [Data Sources](#data-sources)
7. [License](#license)
8. [Contact Information](#contact-information)
9. [To-Do List](#to-do-list)

---

## Background and Objectives

This repository is a curated collection of tutorials that delve into various reduced-order modeling techniques. Utilizing Jupyter Notebooks as the instructional medium, these tutorials provide an interactive, hands-on approach to understanding complex computational models like DeepONet, FNO, POD-DL-ROM, and DL-ROM. Each notebook is designed to function as a standalone tutorial and includes provisions for automatic data retrieval, facilitating execution on both local machines and Google Colab environments.

---

## Installation and Requirements

To execute the tutorials, certain Python packages must be installed. This can be done by executing the following command:

```bash
pip install -r requirements.txt
```

---

## Current Model Coverage
> Li, Z., Kovachki, N., Azizzadenesheli, K., Liu, B., Bhattacharya, K., Stuart, A., & Anandkumar, A. (2020). Fourier neural operator for parametric partial differential equations. arXiv preprint arXiv:2010.08895. [Paper](https://arxiv.org/abs/2010.08895)

> Lu, L., Jin, P., & Karniadakis, G. E. (2019). Deeponet: Learning nonlinear operators for identifying differential equations based on the universal approximation theorem of operators. arXiv preprint arXiv:1910.03193. [Paper](https://arxiv.org/abs/1910.03193)

> Fresca, S., & Manzoni, A. (2022). POD-DL-ROM: Enhancing deep learning-based reduced order models for nonlinear parametrized PDEs by proper orthogonal decomposition. Computer Methods in Applied Mechanics and Engineering, 388, 114181. [Paper](https://www.sciencedirect.com/science/article/pii/S0045782521005120)

> Pant, P., Doshi, R., Bahl, P., & Barati Farimani, A. (2021). Deep learning for reduced order modelling and efficient temporal evolution of fluid simulations. Physics of Fluids, 33(10). [Paper](https://arxiv.org/abs/2107.04556)

---

## Notebook Naming Convention

In order to facilitate ease of navigation and comprehension, a standard naming schema has been adopted for the Jupyter notebooks:

```
[Model]_[Equation/Problem+Dimension]_[TAG].ipynb
```

- **Model**: Represents the computational model or algorithm under study (e.g., FNO, DLROM).
- **Equation/Problem+Dimension**: Specifies the mathematical problem or equation being solved along with its spatial dimensions (e.g., Burgers1D, NOAA2D).
- **TAG**: An optional identifier providing supplementary context or categorizing the notebook's difficulty level or specific focus (e.g., Intro, Advanced, DataPrep).

This structured naming convention aims to simplify navigation and enrich the user's understanding of the content.

---

## Interactive Colab Notebooks

For users interested in a more interactive learning experience, Google Colab versions of these tutorials are available. Click the links below to open the Colab notebooks:

### Colab Reduced Order Modeling Tutorials
- 📔 [FNO_Burgers1D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/FNO_Burgers1D.ipynb)
- 📔 [DeepONet_Burgers1D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/DeepONet_Burgers1D.ipynb)
- 📔 [POD-DL-ROM_Burgers1D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/POD-DL-ROM_Burgers1D.ipynb)
- 📔 [DL-ROM_NOAA2D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/DL-ROM_NOAA2D.ipynb)
- 📔 [Physics_Informed_Gaussian_Process_1D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/pinn_gp_1d_v1.ipynb)

---

## Code Attribution and References

This repository comprises tutorials containing code adapted or inspired by seminal works in the field. At the onset of each notebook, we cite these sources as a testament to our commitment to intellectual integrity and the open-source ethos. We also encourage users to consult the cited works for a comprehensive theoretical foundation and additional applications of the methods.

---

## Data Sources

The datasets required for the tutorials are automatically fetched during runtime or can be manually located in the `data/` directory within the repository.

---

## License

This repository is under the MIT License. Details can be found in the `LICENSE` file.

---

## Contact Information

For inquiries or issues, kindly open an issue on GitHub or reach out via [Twitter](https://twitter.com/rmfarell).

---

## To-Do List

### Dataset Preparation
- [ ] **Dataset Generation**: Generate synthetic or collect real-world data for tutorials.
  - Deadline: `2023-10-25`
  - Context: Necessary for running experiments in the tutorials.

### Model Implementation
- [ ] **Implement NeuralODE**: Incorporate Neural Ordinary Differential Equations into the set of tutorials.
  - Deadline: `2023-10-25`
  - Paper: [Neural Ordinary Differential Equations](https://proceedings.neurips.cc/paper_files/paper/2018/file/69386f6bb1dfed68692a24c8686939b9-Paper.pdf)
  - Citation: Chen, R. T., Rubanova, Y., Bettencourt, J., & Duvenaud, D. K. (2018). Neural ordinary differential equations. Advances in neural information processing systems, 31. [Paper](https://proceedings.neurips.cc/paper_files/paper/2018/file/69386f6bb1dfed68692a24c8686939b9-Paper.pdf)
  
- [ ] **Implement ODE2VAE**: Integrate ODE2VAE model, focusing on generative second-order ODEs.
  - Deadline: `2023-10-26`
  - Paper: [ODE2VAE: Deep Generative Second Order ODEs with Bayesian Neural Networks](https://proceedings.neurips.cc/paper/2019/file/99a401435dcb65c4008d3ad22c8cdad0-Paper.pdf)
  - Citation: Yildiz, C., Heinonen, M., & Lahdesmaki, H. (2019). ODE2VAE: Deep generative second order ODEs with Bayesian neural networks. Advances in Neural Information Processing Systems, 32. [Paper](https://proceedings.neurips.cc/paper/2019/file/99a401435dcb65c4008d3ad22c8cdad0-Paper.pdf)

### Documentation
- [ ] **Add Code Links to 'Current Model Coverage' Section**: Link the model names to their corresponding code files for easier navigation.
  - Deadline: `2023-10-25`
  - Assignee: `Name/Role`

### Debugging
- [ ] **Fix `DL-ROM_NOAA2D.ipynb`**: The model is not learning. Examine and adjust hyperparameters.
  - Deadline: `2023-10-25`
  - Context: Too many parameters to tune; requires careful hyperparameter optimization or model architecture changes.