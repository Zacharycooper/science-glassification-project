kingdom = ''
phylum = ''
class2 = ''
family = ''
genus = ''
species = ''


function dafucntionofDOOM(){
    originaltext = document.getElementById('somespan')
    originaltext.style.opacity = 0;
    setTimeout(function () {
    document.getElementById('somespan').innerHTML = '            <a class="benigingclass2" id="hahaha">Enter Your Kingdom.</a>  '
    document.getElementById('thekindonm').innerHTML = ` <span class='themaindivs'>
    <div class="divofthemaindivs" onclick="anamalia()"><h1 class="titleforkindom">Animalia</h1><p class="pforkingdom">Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, have myocytes and are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. <a href="https://en.wikipedia.org/wiki/Animal">Wikipedia</a></p></div>
    <div class="divofthemaindivs" onclick="plantae()"><h1 class='titleforkindom'>Plantea</h1><p class="pforkingdom">Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight, using chloroplasts derived from endosymbiosis with cyanobacteria to produce sugars from carbon dioxide and water, using the green pigment chlorophyll. <a href="https://en.wikipedia.org/wiki/Plant">Wikipedia</a></p></div>
    <div class="divofthemaindivs" onclick="eubacteria()"><h1 class='titleforkindom'>Eubacteria</h1><p class="pforkingdom">Bacteria are ubiquitous, mostly free-living organisms often consisting of one biological cell. They constitute a large domain of prokaryotic microorganisms. Typically a few micrometres in length, bacteria were among the first life forms to appear on Earth, and are present in most of its habitats.<a href="https://en.wikipedia.org/wiki/Bacteria">Wikipedia</a></p></div>
    <div class="divofthemaindivs" onclick="archaea()"><h1 class='titleforkindom'>Archaea</h1><p class="pforkingdom">Archaea is a domain of single-celled organisms. These microorganisms lack cell nuclei and are therefore prokaryotes. Archaea were initially classified as bacteria, receiving the name archaebacteria, but this term has fallen out of use.<a href="https://en.wikipedia.org/wiki/Archaea">Wikipedia</a></p></div>
    <div class="divofthemaindivs" onclick="protist()"><h1 class='titleforkindom'>Protist</h1><p class="pforkingdom">A protist or protoctist is any eukaryotic organism that is not an animal, plant, or fungus. Protists do not form a natural group, or clade, but an artificial grouping of several independent clades that evolved from the last eukaryotic common ancestor.<a href="https://en.wikipedia.org/wiki/protist">Wikipedia</a></p></div>
    <div class="divofthemaindivs" onclick="fungi()"><h1 class='titleforkindom'>Fungi</h1><p class="pforkingdom">A fungus is any member of the group of eukaryotic organisms that includes microorganisms such as yeasts and molds, as well as the more familiar mushrooms.<a href="https://en.wikipedia.org/wiki/fungis">Wikipedia</a></p></div>





</span>`
originaltext.style.opacity = 1
    $("#thekindonm").addClass("loaded");
    })
}   

function chordata() {
    kingdom = 'anamalia'
    originaltext = document.getElementById('somespan')
    thedata = document.getElementById('thekindonm')
    originaltext.style.opacity = 0;
    thedata.style.opacity = 0;

    setTimeout(function () {
        originaltext.innerHTML = `
    <a class="benigingclass" id="hahaha">Enter your Class</a> `
    thedata.innerHTML = `<span class='themaindivs'>
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Mammalia</h1><p class="pforkingdom">Mammals are warm-blooded vertebrates characterized by mammary glands, hair or fur, and typically giving live birth (except for a few exeptions). They include species like humans (Us), dogs, and whales.</p></div>
    
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Aves</h1><p class="pforkingdom">Aves, or birds, are warm-blooded, feathered vertebrates known for their ability to fly. They exhibit a wide range of adaptations for different environments.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Actinopterygii</h1><p class="pforkingdom">Actinopterygii includes ray-finned fish, the most diverse group of vertebrates. They have fins supported by bony rays and include species like salmon and trout.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Amphibia</h1><p class="pforkingdom">Amphibians are cold-blooded vertebrates with a life cycle that often includes an aquatic larval stage and a terrestrial adult stage. Frogs, toads, and salamanders are examples.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Reptilia</h1><p class="pforkingdom">Reptiles are cold-blooded vertebrates characterized by scales or scutes. They include lizards, snakes, turtles, and crocodiles.</p></div>
</span>

`
originaltext.style.opacity = 1
thedata.style.opacity = 1
    }, 1000);
    


}


function anamalia() {
    kingdom = 'anamalia'
    originaltext = document.getElementById('somespan')
    thedata = document.getElementById('thekindonm')
    originaltext.style.opacity = 0;
    thedata.style.opacity = 0;

    setTimeout(function () {
        originaltext.innerHTML = `
    <a class="benigingclass" id="hahaha">Enter your Phylum</a> `
    thedata.innerHTML = `            <span class='themaindivs'>
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="chordata()">Chordata</h1><p class="pforkingdom">A chordate is a deuterostomic animal belonging to the phylum Chordata. All chordates possess, at some point during their larval or adult stages, five distinctive physical characteristics that distinguish them from other taxa.</p></div>
    
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="arthropoda()">Arthropoda</h1><p class="pforkingdom">Arthropods are invertebrate animals in the phylum Arthropoda. They possess an exoskeleton with a cuticle made of chitin, often mineralised with calcium carbonate, a segmented body, and paired jointed appendages. Wikipedia</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="mollusca()">Mollusca</h1><p class="pforkingdom">Mollusca is the second-largest phylum of invertebrate animals, after the Arthropoda; members are known as molluscs or mollusks. Around 85,000 extant species of molluscs are recognized. The number of fossil species is estimated between 60,000 and 100,000 additional species. Wikipedia</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="annelida()">Annelida</h1><p class="pforkingdom">The annelids, also known as the segmented worms, are a large phylum, with over 22,000 extant species including ragworms, earthworms, and leeches. Wikipedia</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="cnidaria()">Cnidaria</h1><p class="pforkingdom">Cnidaria is a phylum under kingdom Animalia containing over 11,000 species of aquatic animals found both in freshwater and marine environments, predominantly the latter. Their distinguishing feature is cnidocytes, specialized cells that they use mainly for capturing prey. Wikipedia</p></div>
</span>
<span class='themaindivs'>
<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="arthropoda()">Arthropoda</h1><p class="pforkingdom">Arthropods are invertebrate animals that make up the phylum Arthropoda. They have a segmented body, an exoskeleton made of chitin, and jointed appendages.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="mollusca()">Mollusca</h1><p class="pforkingdom">Mollusks belong to the phylum Mollusca. They typically have a soft body, often covered by a hard shell. Common examples include snails, clams, and octopuses.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="annelida()">Annelida</h1><p class="pforkingdom">Annelids are segmented worms found in the phylum Annelida. They have a repeated body structure with ring-like segments. Earthworms and leeches are examples.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="platyhelminthes()">Platyhelminthes</h1><p class="pforkingdom">Platyhelminths are flatworms from the phylum Platyhelminthes. They are often dorsoventrally flattened and include organisms like tapeworms and planarians.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="cnidaria()">Cnidaria</h1><p class="pforkingdom">Cnidarians belong to the phylum Cnidaria. They are characterized by stinging cells called cnidocytes and include animals like jellyfish, corals, and sea anemones.</p></div>
</span>`
originaltext.style.opacity = 1
thedata.style.opacity = 1
    }, 1000);
    


}

function plantae() {
    kingdom = 'plantae'
    originaltext = document.getElementById('somespan')
    thedata = document.getElementById('thekindonm')
    originaltext.style.opacity = 0;
    thedata.style.opacity = 0;

    setTimeout(function () {
        originaltext.innerHTML = `
    <a class="benigingclass" id="hahaha">Enter your Phylum</a> `
    thedata.innerHTML = `           <span class='themaindivs'>
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Angiosperms (Magnoliophyta)</h1><p class="pforkingdom">Angiosperms, also known as flowering plants, are the most diverse group of land plants. They produce seeds enclosed within an ovary or fruit. Examples include roses, oaks, and daisies.</p></div>
    
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Gymnosperms</h1><p class="pforkingdom">Gymnosperms are seed-producing plants without flowers. They include conifers like pine trees, as well as cycads and ginkgos.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Bryophytes</h1><p class="pforkingdom">Bryophytes are non-vascular plants, including mosses, liverworts, and hornworts. They lack true roots, stems, and leaves and are often found in moist environments.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Pteridophytes</h1><p class="pforkingdom">Pteridophytes are vascular plants that reproduce via spores. Ferns, horsetails, and clubmosses are examples of pteridophytes.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Charophyta (Streptophyta)</h1><p class="pforkingdom">Charophyta is a group of green algae closely related to land plants. They share common ancestry with plants and are often considered the closest algal relatives of land plants.</p></div>
</span>
<span class='themaindivs'>
<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Chlorophyta</h1><p class="pforkingdom">Chlorophyta are green algae that can be found in various aquatic environments. They are important photosynthetic organisms and contribute to freshwater and marine ecosystems.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Rhodophyta</h1><p class="pforkingdom">Rhodophyta, or red algae, are primarily marine organisms known for their red pigmentation. They are often found in deep waters and play a role in coral reef ecosystems.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Phaeophyta</h1><p class="pforkingdom">Phaeophyta, or brown algae, are typically marine organisms with brownish coloration. Kelp is a well-known example of a brown alga and can form extensive underwater forests.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Glaucophyta</h1><p class="pforkingdom">Glaucophyta are a small group of green algae with unique characteristics. They are considered one of the earliest diverging lineages of green plants.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Euglenophyta</h1><p class="pforkingdom">Euglenophyta are a group of single-celled flagellated protists. They are known for their unique movement and can be found in freshwater environments.</p></div>
</span>
`
originaltext.style.opacity = 1
thedata.style.opacity = 1
    }, 1000);
    


}

function eubacteria() {
    kingdom = 'eubacteria'
    originaltext = document.getElementById('somespan')
    thedata = document.getElementById('thekindonm')
    originaltext.style.opacity = 0;
    thedata.style.opacity = 0;

    setTimeout(function () {
        originaltext.innerHTML = `
    <a class="benigingclass" id="hahaha">Enter your Phylum</a> `
    thedata.innerHTML = `<span class='themaindivs'>
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Proteobacteria</h1><p class="pforkingdom">Proteobacteria is a diverse phylum of bacteria that includes many well-known groups such as Escherichia coli and Salmonella. They are often associated with various ecological roles, including pathogenicity and nitrogen fixation.</p></div>
    
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Firmicutes</h1><p class="pforkingdom">Firmicutes is a phylum of bacteria that includes species like Clostridium and Bacillus. They are known for their ability to form endospores and play essential roles in decomposition and fermentation.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Actinobacteria</h1><p class="pforkingdom">Actinobacteria is a phylum that includes the genus Streptomyces, known for producing antibiotics. They are important in soil ecosystems and have various industrial applications.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Cyanobacteria</h1><p class="pforkingdom">Cyanobacteria, also known as blue-green algae, are photosynthetic bacteria. They played a crucial role in Earth's history by producing oxygen through photosynthesis.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Bacteroidetes</h1><p class="pforkingdom">Bacteroidetes is a phylum of bacteria that includes many members of the human gut microbiota. They are involved in breaking down complex carbohydrates.</p></div>
</span>
<span class='themaindivs'>
<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Chlamydiae</h1><p class="pforkingdom">Chlamydiae are a phylum of bacteria that includes obligate intracellular pathogens. They can cause diseases like chlamydia and are unique in their developmental cycle.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Spirochaetes</h1><p class="pforkingdom">Spirochaetes is a phylum of bacteria known for their spiral-shaped cells. Some members, like Treponema and Borrelia, are pathogens responsible for diseases like syphilis and Lyme disease.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Chloroflexi</h1><p class="pforkingdom">Chloroflexi is a phylum of bacteria with diverse metabolic capabilities. Some members are photosynthetic, while others are involved in the degradation of organic compounds.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Thermotogae</h1><p class="pforkingdom">Thermotogae is a phylum of bacteria known for their thermophilic nature, thriving in high-temperature environments. They have unique cell membranes and metabolic pathways.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Aquificae</h1><p class="pforkingdom">Aquificae is a phylum of bacteria that includes thermophilic and chemolithoautotrophic organisms. They are often found in hydrothermal vent environments.</p></div>
</span>

`
originaltext.style.opacity = 1
thedata.style.opacity = 1
    }, 1000);
    


}

function archaea() {
    kingdom = 'archaea'
    originaltext = document.getElementById('somespan')
    thedata = document.getElementById('thekindonm')
    originaltext.style.opacity = 0;
    thedata.style.opacity = 0;

    setTimeout(function () {
        originaltext.innerHTML = `
    <a class="benigingclass" id="hahaha">Enter your Phylum</a> `
    thedata.innerHTML = `<span class='themaindivs'>
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Euryarchaeota</h1><p class="pforkingdom">Euryarchaeota is one of the major phyla of archaea. It includes methanogens, halophiles, and thermophiles. Methanogens produce methane and are found in anaerobic environments.</p></div>
    
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Crenarchaeota</h1><p class="pforkingdom">Crenarchaeota is another significant phylum of archaea. Many members are extremophiles, thriving in extreme conditions like hot springs and acidic environments.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Korarchaeota</h1><p class="pforkingdom">Korarchaeota is a lesser-known phylum of archaea. They are often found in geothermal environments and play a role in the carbon cycle.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Thaumarchaeota</h1><p class="pforkingdom">Thaumarchaeota is a recently discovered phylum of archaea. They are involved in the nitrogen cycle and are found in various environments, including soil and oceans.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Nanoarchaeota</h1><p class="pforkingdom">Nanoarchaeota is a unique phylum of archaea. They are one of the smallest known cellular organisms and often live as symbionts with other archaea.</p></div>
</span>
<span class='themaindivs'>
<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Korarchaeota</h1><p class="pforkingdom">Korarchaeota is a lesser-known phylum of archaea. They are often found in geothermal environments and play a role in the carbon cycle.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Thaumarchaeota</h1><p class="pforkingdom">Thaumarchaeota is a recently discovered phylum of archaea. They are involved in the nitrogen cycle and are found in various environments, including soil and oceans.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Nanoarchaeota</h1><p class="pforkingdom">Nanoarchaeota is a unique phylum of archaea. They are one of the smallest known cellular organisms and often live as symbionts with other archaea.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Euryarchaeota</h1><p class="pforkingdom">Euryarchaeota is one of the major phyla of archaea. It includes methanogens, halophiles, and thermophiles. Methanogens produce methane and are found in anaerobic environments.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Crenarchaeota</h1><p class="pforkingdom">Crenarchaeota is another significant phylum of archaea. Many members are extremophiles, thriving in extreme conditions like hot springs and acidic environments.</p></div>
</span>

`
originaltext.style.opacity = 1
thedata.style.opacity = 1
    }, 1000);
    


}
function protist() {
    kingdom = 'protist'
    originaltext = document.getElementById('somespan')
    thedata = document.getElementById('thekindonm')
    originaltext.style.opacity = 0;
    thedata.style.opacity = 0;

    setTimeout(function () {
        originaltext.innerHTML = `
    <a class="benigingclass" id="hahaha">Enter your Phylum</a> `
    thedata.innerHTML = `<span class='themaindivs'>
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Euglenozoa</h1><p class="pforkingdom">Euglenozoa is a group of flagellated protists, including Euglena. They have a unique type of flagellum and are often found in freshwater habitats.</p></div>
    
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Alveolata</h1><p class="pforkingdom">Alveolata is a diverse group that includes ciliates, dinoflagellates, and apicomplexans. Some are known for causing diseases like malaria (Plasmodium).</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Stramenopiles</h1><p class="pforkingdom">Stramenopiles, or heterokonts, include diatoms, brown algae, and oomycetes. Diatoms are important primary producers in aquatic ecosystems.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Rhizaria</h1><p class="pforkingdom">Rhizaria is a diverse group with amoeboid and flagellated protists. Foraminifera, a subgroup, are known for their calcium carbonate shells.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Apicomplexa</h1><p class="pforkingdom">Apicomplexa includes parasitic protists like Plasmodium (malaria) and Toxoplasma. They have a specialized organelle called the apicoplast.</p></div>
</span>
<span class='themaindivs'>
<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Amoebozoa</h1><p class="pforkingdom">Amoebozoa includes amoeboid protists like Amoeba and slime molds. They move and feed by extending pseudopodia.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Excavata</h1><p class="pforkingdom">Excavata is a diverse group with flagellated protists, including diplomonads and parabasalids. Some are involved in anaerobic processes.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Cryptophyta</h1><p class="pforkingdom">Cryptophyta are photosynthetic protists with a unique type of plastid. They are found in both freshwater and marine environments.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Haptophyta</h1><p class="pforkingdom">Haptophyta are photosynthetic protists with calcium carbonate scales called coccoliths. They are part of marine phytoplankton.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Kinetoplastida</h1><p class="pforkingdom">Kinetoplastida includes flagellated protists like Trypanosoma. Some are parasites causing diseases like African trypanosomiasis (sleeping sickness).</p></div>
</span>

`
originaltext.style.opacity = 1
thedata.style.opacity = 1
    }, 1000);
    


}
function fungi() {
    kingdom = 'fungi'
    originaltext = document.getElementById('somespan')
    thedata = document.getElementById('thekindonm')
    originaltext.style.opacity = 0;
    thedata.style.opacity = 0;

    setTimeout(function () {
        originaltext.innerHTML = `
    <a class="benigingclass" id="hahaha">Enter your Phylum</a> `
    thedata.innerHTML = `<span class='themaindivs'>
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Ascomycota</h1><p class="pforkingdom">Ascomycota is one of the largest phyla of fungi, including yeasts, truffles, and many plant pathogens. They produce spores in sac-like structures called asci.</p></div>
    
    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Basidiomycota</h1><p class="pforkingdom">Basidiomycota includes mushrooms, bracket fungi, and rusts. They are known for producing spores on club-shaped structures called basidia.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Zygomycota</h1><p class="pforkingdom">Zygomycota includes bread molds and some mycorrhizal fungi. They reproduce via zygospores formed by the fusion of specialized hyphae.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Glomeromycota</h1><p class="pforkingdom">Glomeromycota are arbuscular mycorrhizal fungi that form mutualistic associations with plant roots. They play a crucial role in nutrient uptake by plants.</p></div>

    <div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Chytridiomycota</h1><p class="pforkingdom">Chytridiomycota are aquatic fungi, including chytrids. They have flagellated spores and are often found in water and soil.</p></div>
</span>
<span class='themaindivs'>
<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Glomeromycota</h1><p class="pforkingdom">Glomeromycota are arbuscular mycorrhizal fungi that form mutualistic associations with plant roots. They play a crucial role in nutrient uptake by plants.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Chytridiomycota</h1><p class="pforkingdom">Chytridiomycota are aquatic fungi, including chytrids. They have flagellated spores and are often found in water and soil.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Glomeromycota</h1><p class="pforkingdom">Glomeromycota are arbuscular mycorrhizal fungi that form mutualistic associations with plant roots. They play a crucial role in nutrient uptake by plants.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Chytridiomycota</h1><p class="pforkingdom">Chytridiomycota are aquatic fungi, including chytrids. They have flagellated spores and are often found in water and soil.</p></div>

<div class="divofthemaindivs"><h1 class="titleforkindom" onclick="noneleft()">Glomeromycota</h1><p class="pforkingdom">Glomeromycota are arbuscular mycorrhizal fungi that form mutualistic associations with plant roots. They play a crucial role in nutrient uptake by plants.</p></div>
</span>


`
originaltext.style.opacity = 1
thedata.style.opacity = 1
    }, 1000);
    


}

function noneleft(){
    console.log('huh')
    originaltext = document.getElementById('somespan')
    thedata = document.getElementById('thekindonm')
    originaltext.style.opacity = 0;
    thedata.style.opacity = 0;

    setTimeout(function () {

    thedata.innerHTML = `<span class='themaindivs'>
    <div class="divofthemaindivs" onclick='dafucntionofDOOM()'><h1 class="titleforkindom">You reached the end.</h1><p class="pforkingdom">Sadly, due to the large amount of everything to do and a small timeframe, this is the end of this website. I may update this website later on and make it public, but otherwise you wont find anything beyond this point. Click me to return to the start.</p></div>
</span>

`
originaltext.style.opacity = 1
thedata.style.opacity = 1
    }, 1000);
    


}
