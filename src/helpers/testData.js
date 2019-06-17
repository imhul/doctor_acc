const testData = {
    "doctor": {
        "name": "Ожоженко Галина Василівна",
        "avatar": "",
        "token": "",
        "isAuthorized": true
    },
    "inputs": [
        {
            "key": 0,
            "name": "lastName",
            "label": "Прізвище",
            "value": "Ожоженко"
        },
        {
            "key": 1,
            "name": "firstName",
            "label": "ім'я",
            "value": "Галина"
        },
        {
            "key": 2,
            "name": "middleName",
            "label": "по батькові",
            "value": "Василівна"
        }
        
    ],
    "tables": [
        {
            "key": 0,
            "name": "education",
            "editingKey": "",
            "count": 2,
            "editing": false,
            "rows": [
                {
                    "key": "education row 1",
                    "name": "Edward King",
                    "faculty": "London, Park Lane no. 0",
                    "startYear": "2001",
                    "stopYear": "2004",
                    "lastCourse": 4,
                    "specialty": "doctor",
                },
                {
                    "key": "education row 2",
                    "name": "King Edward",
                    "faculty": "London, Park Lane no. 1",
                    "startYear": "2007",
                    "stopYear": "2010",
                    "lastCourse": 3,
                    "specialty": "doctor",
                }
            ]
        },
        {
            "key": 1,
            "name": "work",
            "editingKey": "",
            "count": 2,
            "editing": false,
            "rows": [
                {
                    "key": "work row 1",
                    "startDate": "лют 2001",
                    "stopDate": "сер 2006",
                    "post": "Офтальмолог, лікарня ім. С.Бандери"  ,
                    "geo": "Львів",
                },
                {
                    "key": "work row 2",
                    "startDate": "бер 2007",
                    "stopDate": "тра 2012",
                    "post": "Офтальмолог, лікарня ім. Т.Шевченко"  ,
                    "geo": "Хмельницьк",
                }
            ]
        },
        {
            "key": 2,
            "name": "oversea",
            "editingKey": "",
            "count": 2,
            "editing": false,
            "rows": [
                {
                    "key": "oversea row 1",
                    "startDate": "лют 2001",
                    "stopDate": "сер 2002",
                    "country": "USA",
                    "target": "Навчання"
                },
                {
                    "key": "oversea row 2",
                    "startDate": "бер 2007",
                    "stopDate": "тра 2008",
                    "country": "USA",
                    "target": "Навчання"
                }
            ]
        }
    ]
};

export default testData;



