                                          ***Warehouse Inventory App***




*About The Project*

- To build a warehouse inventory management system prototype.
- As a warehouse employee, I can view the warehouses in the database as a dynamic web page.  Warehouses have a unique name, location, image, and capacity.
- As a warehouse employee, I can add and remove palettes of inventory from a warehouse using a graphical user interface.  Palettes can only be added to warehouses with available capacity.
- As a warehouse employee, I can add and remove boxes of inventory from a palette using a graphical user interface.  Boxes can only be added to palettes with available capacity.
- As a warehouse employee, I am notified when a palette is empty and must be removed.


*Getting Started*

- Outlined plan on [kanban](https://ermileb.atlassian.net/jira/software/projects/WIA/boards/2)
- Established primary and foreign key Entity Relational Diagram with draw.io
- Layed out the project sequence diagram flow with draw.io
- Creation of the project's organization and Cloning of repository
- Created the development branch
- Initialized of a new node project with its relevant dependencies
- Revision of scripts in package.json
- Distribution of project tasks between team members


*Tools used*

- Jira
- Draw.io
- Github
- Visual Studio Code
- Node
- JavaScript
- Express
- Sequelize
- SQLite3
- NPM
- Handlebars
- Body-parser
- CSS
- HTML
- bcrypt
- Bootstrap
- Docker Hub
- Play with Docker
- GitHub Actions
- AWS Elastic Beanstock
- AWS CodePipeline

*Dependencies*

- "@handlebars/allow-prototype-access": "^1.0.5",
- "bcrypt": "^5.0.1",
- "body-parser": "^1.19.1",
- "cookie-parser": "^1.4.6",
- "dotenv": "^10.0.0",
- "express": "^4.17.2",
- "express-handlebars": "^5.3.2",
- "express-session": "^1.17.2",
- "handlebars": "^4.7.7",
- "jest": "^27.4.5",
- "nodemon": "^2.0.15",
- "pg": "^8.7.1",
- "sequelize": "^6.12.0",
- "sqlite3": "^5.0.2"


*Production*

- Created a dynamic web page for warehouses inventory management system
- Forms for the creation of new warehouse, pallet and box
- View and delete options for warehouses, pallets, boxes and employees
- Inventory for added pallets and boxes into the warehouse using the GUI
- Inventory for removed pallets and boxes from the warehouse using the GUI
- Signup and login forms for employees


*Images*

<img src="https://user-images.githubusercontent.com/94479058/147260259-436197a1-b6e5-4b09-a1d6-614217d7fac1.PNG" width="360"> ERD <img src="https://user-images.githubusercontent.com/94479058/147204531-a5a832b5-2c0f-4370-9e78-958b598fbe10.png" width="360"> Sequence diagram  



*Helpful Resouces*

- [Github cheat sheet](https://www.google.com/search?q=github+cheat+sheet&rlz=1C5GCEM_enUS979US980&oq=github+cheat&aqs=chrome.0.0i512j69i57j0i512l8.19583j0j15&sourceid=chrome&ie=UTF-8)
- [Eloquent JavaScript](https://www.google.com/search?q=Eloquent+JS+Book&rlz=1C5GCEM_enUS979US980&ei=mizEYbOlEcPk_Aa97oOACA&ved=0ahUKEwiz2tSMuvn0AhVDMt8KHT33AIAQ4dUDCA4&uact=5&oq=Eloquent+JS+Book&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEOgcIABBHELADOg0ILhDHARDRAxCwAxBDOgcIABCwAxBDSgQIQRgASgQIRhgAUPRzWPRzYNeeAWgBcAJ4AIABc4gBc5IBAzAuMZgBAKABAqABAcgBCsABAQ&sclient=gws-wiz)
- [JavaScript Asynchronous Programming](https://www.google.com/search?q=Asynchronous+JavaScript&rlz=1C5GCEM_enUS979US980&ei=Vi3EYbaNFYmMggfb5piYCA&ved=0ahUKEwi2kKvmuvn0AhUJhuAKHVszBoMQ4dUDCA4&uact=5&oq=Asynchronous+JavaScript&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDSgQIQRgASgQIRhgAUIUkWIUkYIAuaAJwAngAgAFyiAFykgEDMC4xmAEAoAECoAEByAEKwAEB&sclient=gws-wiz)
- [Expressjs](https://www.google.com/search?q=Expressjs&rlz=1C5GCEM_enUS979US980&ei=tS3EYcq1GqW1ggeX3YDIDg&ved=0ahUKEwiK5NaTu_n0AhWlmuAKHZcuAOkQ4dUDCA4&uact=5&oq=Expressjs&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEJECMgUIABCABDIFCAAQgAQyBQgAEIAEMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDSgQIQRgASgQIRhgAUL4nWL4nYLQ1aAFwAngAgAGQAYgBkAGSAQMwLjGYAQCgAQKgAQHIAQrAAQE&sclient=gws-wiz)
- [Bootstrap](https://www.google.com/search?q=Bootstrap&rlz=1C5GCEM_enUS979US980&ei=Py7EYffFHvDp_Qb857qwAQ&ved=0ahUKEwi34cHVu_n0AhXwdN8KHfyzDhYQ4dUDCA4&uact=5&oq=Bootstrap&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyCAgAEIAEELEDMgcIABCxAxBDMggIABCABBCxAzIFCAAQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxA0oECEEYAEoECEYYAFAAWABg2xFoAHACeACAAWmIAWmSAQMwLjGYAQCgAQKgAQHAAQE&sclient=gws-wiz)
- [w3schools](https://www.google.com/search?q=w3schools&rlz=1C5GCEM_enUS979US980&ei=HC_EYeeJCK22ggeK27_oCA&oq=w3sc&gs_lcp=Cgdnd3Mtd2l6EAEYAjIECAAQQzIHCAAQsQMQQzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyBwgAELEDEEMyBQgAEIAEMggIABCABBCxAzoLCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBEKMCOgUILhCABDoNCC4QsQMQxwEQ0QMQQ0oECEEYAEoECEYYAFAAWOsKYLwnaABwAngAgAF9iAHHA5IBAzAuNJgBAKABAcABAQ&sclient=gws-wiz)
- [MDN Web Docs](https://www.google.com/search?q=mdn&rlz=1C5GCEM_enUS979US980&ei=6S7EYYKWC86v_QaI_47QBw&ved=0ahUKEwjCrramvPn0AhXOV98KHYi_A3oQ4dUDCA4&uact=5&oq=mdn&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAoQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQgAQyBAgAEEMyCAguEIAEELEDMgcIABCxAxBDOhEILhCABBCxAxCDARDHARCjAjoICC4QsQMQgwE6CwgAEIAEELEDEIMBOggIABCABBCxAzoOCC4QgAQQsQMQxwEQowI6CwguEIAEEMcBENEDSgQIQRgASgQIRhgAUABYiwlgqA1oAHACeACAAXWIAckCkgEDMC4zmAEAoAEBwAEB&sclient=gws-wiz)
- [Stack Overflow](https://www.google.com/search?q=stack+overflow&rlz=1C5GCEM_enUS979US980&ei=cy_EYamXBOnD_Qa6qpTQCw&oq=stac&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCAAQsQMQQzIHCAAQsQMQQzIICC4QgAQQsQMyCAguEIAEELEDMggIABCABBCxAzILCC4QgAQQxwEQrwEyCAguEIAEELEDMggIABCABBCxAzIECAAQQzIECAAQQzoFCAAQgAQ6BQguEIAEOggILhCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6CwguEIAEEMcBENEDOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6CAgAELEDEIMBOgsIABCABBCxAxDJAzoFCAAQkgNKBAhBGABKBAhGGABQAFjwB2DkGGgAcAJ4AIAB4wKIAbUGkgEHMC4yLjEuMZgBAKABAcABAQ&sclient=gws-wiz)
- [bcrypt](https://www.google.com/search?q=bcrypt&rlz=1C5GCEM_enUS979US980&ei=xS_EYaDCDsmIggf2o43oAg&ved=0ahUKEwjguK2Pvfn0AhVJhOAKHfZRAy0Q4dUDCA4&uact=5&oq=bcrypt&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEJECMgQIABBDMgQIABBDMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOhEILhCABBCxAxCDARDHARCjAjoICAAQgAQQsQM6DgguEIAEELEDEMcBEKMCOggILhCxAxCDAToLCAAQgAQQsQMQgwE6BQgAEJECOgcIABCxAxBDOgsILhCABBDHARCvAToLCC4QgAQQxwEQowJKBAhBGABKBAhGGABQAFj8CmDHEWgAcAJ4AIABqgKIAbAJkgEFMC4zLjOYAQCgAQHAAQE&sclient=gws-wiz)
- [YouTube](https://www.google.com/search?q=youtube&rlz=1C5GCEM_enUS979US980&ei=4y_EYaCSH6ivggfj05yYCA&ved=0ahUKEwjgj-Wdvfn0AhWol-AKHeMpB4MQ4dUDCA4&uact=5&oq=youtube&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBENEDMgUIABCABDIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQAzIICAAQgAQQsQMyCAgAEIAEELEDMgsIABCABBCxAxCDATIICAAQgAQQsQM6BQgAEJECOggILhCABBCxAzoLCC4QgAQQsQMQgwE6CwguEIAEEMcBEK8BOggIABCxAxCDAToFCC4QgAQ6CwguEIAEEMcBENEDOgcILhCxAxBDOgQIABAKOgcIABCxAxAKOgQILhAKOhMILhCxAxCDARCxAxDHARDRAxAKOgYIABAKEAM6CggAELEDEIMBEAo6EAguELEDEIMBEMcBENEDEApKBAhBGABKBAhGGABQAFjQM2CwOmgGcAJ4AIABwQKIAYcRkgEHMS45LjIuMZgBAKABAcABAQ&sclient=gws-wiz)


*Work In Progress*

- Create a dynamic web page for managers and employees


*Future Work*

- Establish privilege levels for managers and employees


*Team Members* 

1. Ermias Tsage
2. Anuja Surawashi
3. Nadege Tenku
4. Michael Dunn-OConnor (Coach)

                                                **Thank You**
