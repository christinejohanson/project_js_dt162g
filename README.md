# DT162 Projekt-christinejohanson chjo2104 

Projekt i kursen Javascriptbaserad webbutveckling. Del 1 består av ett REST-Api med full CRUD-funktionalitet och lagrat data sparas i MongoDB. Del 2 består av
webbapplikation skapad med Vue som hämtar data från api´et.
Webbapplikationen läser ut data om foxxar med information om dessa. Den är uppbyggd med SPA, så med hjälp av navigeringsmenyn ändras innehållet på sidan. 

## DEL 1 REST-API ##

**project_js_dt162g**

Inställning för databaskoppling och skapande av databasschema i fil project_js_dt162g/foxxes.js

API´et finns ej publicerat, utan körs lokalt. 

Foxxes

| Metod | Ändpunkt | Beskrivning |
| --- | --- | --- |
| GET | /foxxes | hämtar alla foxxes |
| GET | /foxxes/{id} | hämtar foxx med angivet ID |
| POST | /foxxes | lagrar ny foxx |
| PUT | /foxxes/{id} | uppdaterar foxx med angivet ID |
| DELETE | /foxxes/{id} | raderar foxx med angivet ID |


## DEL 2 WEBBAPPLIKATION ##

**project_js_client**

Webbapplikation körs lokalt på server. 

Hämtar data från api´et, skapat med Vue som en SPA. Bootstrap används som CSS-ramverk. 
