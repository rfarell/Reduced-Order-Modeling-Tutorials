# Reduced Order Modeling Tutorials

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

---

## Interactive Colab Notebooks

For users interested in a more interactive learning experience, Google Colab versions of these tutorials are available. Click the links below to open the Colab notebooks:
- 📔 [FNO_Burgers1D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/FNO_Burgers1D.ipynb)
- 📔 [DeepONet_Burgers1D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/DeepONet_Burgers1D.ipynb)
- 📔 [POD-DL-ROM_Burgers1D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/POD-DL-ROM_Burgers1D.ipynb)
- 📔 [DL-ROM_NOAA2D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/DL-ROM_NOAA2D.ipynb)
- 📔 [Physics_Informed_Gaussian_Process_1D](https://colab.research.google.com/github/rfarell/Reduced-Order-Modeling-Tutorials/blob/main/notebooks/pinn_gp_1d_v1.ipynb)

---

## Data Sources

The datasets required for the tutorials are automatically fetched during runtime.

---

## License

This repository is under the MIT License. Details can be found in the `LICENSE` file.