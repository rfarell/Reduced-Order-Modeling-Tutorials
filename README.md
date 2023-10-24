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
- [ ] Dataset Generation
- [ ] Integrate NeuralODEs into the tutorials
- [ ] Incorporate ODE2VAE model
