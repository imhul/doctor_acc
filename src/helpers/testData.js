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
            "value": "Ожоженко",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 1,
            "name": "firstName",
            "label": "ім'я",
            "value": "Галина",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 2,
            "name": "middleName",
            "label": "по батькові",
            "value": "Василівна",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 3,
            "name": "birthday",
            "label": "Рік, число і місяць народження",
            "value": "12.09.1973",
            "type": "date",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": {
                "time": false,
                "mode": "year",
                "format": "YYYY-MM-DD"
            }
        },
        {
            "key": 4,
            "name": "homeland",
            "label": "Місце народженняі",
            "value": "Тернопіль",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 5,
            "name": "lang",
            "label": "Якими мовами володієте і якою мірою",
            "value": "Українська - рідна",
            "type": "textarea",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 6,
            "name": "degree",
            "label": "Учений ступінь, учене звання",
            "value": "Доктор медичних наук",
            "type": "textarea",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 7,
            "name": "research",
            "label": "Які маєте наукові праці і винаходи",
            "value": "---",
            "type": "textarea",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 8,
            "name": "awards",
            "label": "Які маєте державні нагороди",
            "value": "---",
            "type": "textarea",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 9,
            "name": "military",
            "label": "Відношення до військових обов’язків і військове звання",
            "value": "---",
            "type": "textarea",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 10,
            "name": "troop",
            "label": "Склад",
            "value": "---",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 11,
            "name": "forces",
            "label": "Рід військ",
            "value": "---",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 12,
            "name": "family",
            "label": "Родинний стан на момент заповнення особового листка",
            "value": "---",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 13,
            "name": "address",
            "label": "Домашня адреса",
            "value": "---",
            "type": "textarea",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 14,
            "name": "homePhone",
            "label": "домашній телефон",
            "value": "+380 63 442 25 37",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 15,
            "name": "workPhone",
            "label": "робочий телефон",
            "value": "+380 63 442 25 37",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 16,
            "name": "passSeries",
            "label": "Паспорт: серія",
            "value": "ВА",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 17,
            "name": "passNum",
            "label": "номер",
            "value": "456432",
            "type": "text",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 18,
            "name": "passIssued",
            "label": "виданий",
            "value": "---",
            "type": "textarea",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": null
        },
        {
            "key": 19,
            "name": "day",
            "label": "Поточний день",
            "value": "20",
            "type": "date",
            "placeholder": "",
            "required": true,
            "checked": false,
            "mode": {
                "time": false,
                "mode": "year",
                "format": "YYYY-MM-DD"
            }
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



