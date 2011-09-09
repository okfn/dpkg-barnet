{
  "dataset": {
    "name": "barnet-budget",
    "label": "UK Barnet Council budget", 
    "description": "Consolidated spending information from Barnet Borough Council",
    "currency": "GBP",
    "temporal_granularity": "year",
    "unique_keys": ["unique_id"]
  },
  "mapping": {
    "amount": {
      "type": "value",
      "label": "Amount",
      "column": "Amount",
      "datatype": "float"
    },
    "description": {
      "type": "value",
      "label": "Description",
      "description": "A short description of the entry",
      "column": "Detailed Description",
      "datatype": "string"
    },
    "time": {
      "type": "value",
      "label": "Year",
      "column": "Year",
      "datatype": "date"
    },
    "from": {
      "type": "entity",
      "label": "Spender",
      "fields": [ 
        { "constant": "Barnet Council", "name": "label", "datatype": "constant" }
      ]
    },
    "to": {
      "type": "entity",
      "label": "Recipient",
      "fields": [
        { "constant": "Society (Barnet)", "name": "label", "datatype": "constant" }
      ]
    },
    "level1": {
      "type": "classifier",
      "label": "Barnet Level 1",
      "description": "Barnet Council Level 1 spending classification",
      "fields": [
        { "column": "Level 1", "name": "label", "datatype": "string" }
      ],
      "taxonomy": "barnet-level-1"
    },
    "level2": {
      "type": "classifier",
      "label": "Barnet Level 2",
      "description": "Barnet Council Level 2 spending classification",
      "fields": [
        { "column": "Level 2", "name": "label", "datatype": "string" }
      ],
      "taxonomy": "barnet-level-2"
    },
    "level3": {
      "type": "classifier",
      "label": "Barnet Level 3",
      "description": "Barnet Council Level 3 spending classification (may be empty)",
      "fields": [
        { "column": "Level 3", "name": "label", "datatype": "string" }
      ],
      "taxonomy": "barnet-level-3"
    },
    "unique_id": {
      "label": "Unique ID", 
      "description": "Unique transaction ID", 
      "column": "unique_id",
      "datatype": "string", 
      "type": "value"
    } 
  },
  "views": [
    {
      "entity": "dataset",
      "label": "Spending by Level 1",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "level1",
      "filters": {"name": "barnet-budget"}           
    },
    {
      "entity": "classifier",
      "label": "Spending by Level 2",
      "name": "default",
      "dimension": "level1",
      "breakdown": "level2",
      "filters": {"taxonomy": "barnet-level-1"}           
    }
  ]
}