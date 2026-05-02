MA2806 - Data Journalism and Visualisation
Group Project: Street Names

GitHub Pages: https://anya-alyssa.github.io/MA2806-GroupProject-StreetNames/
GitHub Repo: https://github.com/anya-alyssa/MA2806-GroupProject-StreetNames

Summary: - joy if you can make this sound better please feel free
    This project explores gender bias in street naming across three areas of London: Streatham, Edmonton, and Newham. By collecting and categorising street names in these areas and their gender biases and associations, we have visualised how something as simple as the names of the streets we travel reflect broader social inequalities. Through the use of contrasting plotted maps, the project highlights disparities between male and female representation, encouraging reflection on how power and patriarchy are embedded in everyday geography.

Description of dataset - Anya:
    The dataset we used was derived from the Ordnance Survey 'Open Names' dataset, found on the gov.uk website. This dataset is a "comprehensive dataset of place names, road numbers and postcodes for Great Britain" (Ordnance Survey, 2025).
        Authors: Ordnance Survey
        Source: Ordnance Survey Open Names on data.gov.uk
        Publication date: 16 April 2025
        Format: CSV files
    
    From this dataset, subsets were created for our three chosen areas of Streatham (Anya), Edmonton (Levy), and Newham (Joy). This was done using the terminal commands, that were taught by Tom Keene, to filter our specific location's street names, providing us with much smaller, more manageable datasets. We then manually sorted through and categorised our individual datasets into either: male, female, unisex, or unnamed. These were then manually plotted into the map on our website by finding the coordinates of each street and adding it to our dataset.

Overview of design/technical/other challenges with descrtiption of how the project was collectively developed:
    Design: 
    - The use of contrasting colours to distinguish gender categories
    - The use of a simple and neutral website design with two standout colours
    - Minimal interface to not distract the user
    - Use of specific markers to the areas so it is easy to differetiate
    - Lowering the opacity of the markers to clearly see the density of the amount of markers in an area.

    Technical:
    - Maps implemented with leaflet.js and OpenStreetMap
    - Pulling the data from the original dataset to try and isolate just the locations needed
    - Also pulling only the relevent fields of the dataset
    - Loading the data through the JSON files
    - Adding cutom markers instead of the provided leaflet.js marker that could only be one colour (blue)

Group Description
    Group Members and Roles
    - Anya - Coding and project management
    - Levy - Visual design
    - Joy - Copy Writer

    We worked and communicated via a combination of in-person meetings (to check in on progress, make decisions and discuss issues) and a gorup chat made on Instagram (for regular updates, questions and general communication on the project). The workload was distributed as: coding would be handled primarily by Anya, write ups would be done by Joy, visual design and artwork would be done by Levy, and the data collection and plotting woul be shared across all team members, each focusing on our dedicated area. If conflict were to arise, minor problems would be resolved through a discussion, but any major concerns are to be taken to Tom Keene for advice.


 including a summary of everyone’s role. You should outline your approach to group organisation, including communication methods (e.g., email, WhatsApp), workload distribution, and accountability measures. Describe agreements for conflict resolution and when to escalate concerns, and approach to consensus-building (e.g. voting, discussion). Highlight values guiding an inclusive approach to group work. And include any supporting information which provide a sense of the production process – through communication to development.   

 References: 
    Ordnance Survey (2025) OS Open Names. data.gov.uk. Ordnance Survey. Available at: https://www.data.gov.uk/dataset/4949c88e-89b7-49b5-a0cf-8a3a2a4dac9d/os-open-names1