# Data sources

The eBioDiv Matching Service processes data that has been published through the [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/). As the service is used to match material citations from the academic literature with the related specimens in natural history collections, it relies on intermediary data sources of two types:

1. Material citations databases
2. Collection databases (from institutions)

In the following, a general description is provided of how the source data gets aggregated into these intermediary databases and how it is then further processed to be published through GBIF. These processes are described in an ideal-typical form for general reference purposes. Actual processes are heterogeneous and may deviate from this ideal-typical form in several regards. Also, there are currently various initiatives at national and international levels aiming to harmonize data management practices across the sector.

Based on these considerations, we give some suggestions as to how interested parties may go about to provide further data as an input to the eBioDiv Matching Service.

## Material citations databases

Material citations databases are used to store the information from taxonomic treatments found in the academic literature in the form of structured data. This data may be digital born and provided in a machine-readable format from the outset, or it may have been retrieved from academic publications that did not adhere to [FAIR data standards](https://www.go-fair.org/fair-principles/) at the time of publication.

As regards material citations data, the eBioDiv Matching Service mainly relies on the data provided through the [Plazi Treatment Bank](http://plazi.org/treatmentbank/), which is currently the world’s largest material citations database. Since its origins, the data provided through the Plazi Treatment Bank has been extracted from legacy sources (e.g. scans of academic journals published in the past) with the help of computer algorithms. In parallel, the maintainers of the database have made considerable efforts to sensitize publishers for the value of publishing machine-readable data from the outset. As a result, data from current publications is increasingly provided in machine-readable form and in line with previously agreed-upon standards.

The Plazi Treatment Bank is regularly harvested by GBIF. Thus, all the material citations contained in the Plazi Treatment Bank are also available on GBIF and serve as inputs to the eBioDiv Matching Service. Further information on how to ingest material citations into the Plazi Treatment Bank can be found at: [Plazi.org - How to Participate?](https://plazi.org/how-to-participate/)

## Collection databases

Collection databases are used to store the metadata about the individual items of a collection. When it comes to “digitizing” a natural history collection, one of the first steps consists in creating a digital catalog, or digital inventory, of all the items in the collection.

Typically, a unique identifier is assigned to each item in the collection, and a method is implemented that allows users of the collection database to easily find a given item in the physical collection based on the database record, and vice versa (some institutions, for example, attach barcodes to the specimens in their collection in order to make it easy to call up the respective database entry using a barcode reader).

When it comes to sharing collection metadata beyond institutional boundaries, the “digitization” process typically also involves adhering to a system of globally unique identifiers (e.g. by complementing the unique identifiers defined at the level of the institution by a globally unique institution code) as well as agreeing upon and adhering to a harmonized data model.

In practice, the transition from legacy data structures to a harmonized data model is quite a laborious process, not only because it may require quite some data cleansing and data transformation, but also because it is a tedious and challenging undertaking to get all the relevant players in the sector to agree on a shared data model and to implement it in their own IT systems. This is why, during the transition phase, a pragmatic approach is often chosen, consisting in exporting data from legacy systems, cleansing and mapping it to a harmonized data model, and ingesting it into a common database that serves as a data aggregator.

One such data aggregator at the international level is [GBIF](https://www.gbif.org/), whereas the aforementioned data cleansing and harmonization process is often facilitated by national data aggregators which serve as intermediaries between natural heritage institutions and GBIF. These national data aggregators play an important role in facilitating the transition from legacy data models to a shared data model. But in the end, a successful transition to a shared data model requires the active involvement of the entire natural heritage community, as all its members will be called upon to work with the new data model, and all the institutions will sooner or later need to transition to new data infrastructures that are compliant with the shared data model.

## How to add further data sources to the eBioDiv Matching Service?

When using the eBioDiv Matching Service you may notice that the data available to be matched is far from being complete. – As a matter of fact, many relevant collection catalogs and many relevant publications are still missing from the GBIF database that serves as a basis for the matching service. In the following we will explain how you can help make further data sources available for matching.

**You are the manager or curator of a natural history collection?**

Make sure that your collection gets “digitized”, which will typically involve creating and maintaining a digital catalog. To facilitate data sharing across institutions, use globally unique identifiers and implement a shared data model in your catalog. Contact your national data aggregator (if available) or GBIF directly to assist you with the publication of your data on the GBIF platform. Contact information of national contact points can be found on the [GBIF Network overview page](https://www.gbif.org/the-gbif-network) (click on your country on the map to access the contact information of your national node manager).

**You are the director of a natural heritage institution?** 

Make sure that you support the “digitization” of the natural history collections held by your institution. This will typically involve setting up digital catalogs, using globally unique identifiers to refer to the specimens in your collections and transitioning to a shared data model. Support the publication of your collection catalogs on data aggregation platforms such as GBIF and make sure that newly procured IT infrastructure allows your institution to adhere to [FAIR data standards](https://www.go-fair.org/fair-principles/).

**You are an academic?**

Encourage the editors and publishers of the academic journals where you act as an author or reviewer to adhere to [FAIR data standards](https://www.go-fair.org/fair-principles/), and to cooperate with [Plazi](https://plazi.org/how-to-participate/) to add earlier issues of the journal to the Plazi Treatment Bank.

**You are the editor, publisher or rights holder of an academic journal?**

Make sure that future issues of your journal adhere to [FAIR data standards](https://www.go-fair.org/fair-principles/), and cooperate with [Plazi](https://plazi.org/how-to-participate/) to add earlier issues of the journal to the Plazi Treatment Bank.


