{
  "views": [
    {
      "drilldown": "level1", 
      "name": "default", 
      "label": "Spending by Level 1", 
      "entity": "dataset", 
      "dimension": "dataset"
    }, 
    {
      "drilldown": "level2", 
      "name": "default", 
      "label": "Spending by Level 2", 
      "filters": {
        "taxonomy": "barnet-level-1"
      }, 
      "entity": "dimension", 
      "dimension": "level1"
    }
  ], 
  "mapping": {
    "description": {
      "column": "Detailed Description", 
      "datatype": "string", 
      "type": "attribute", 
      "description": "A short description of the entry", 
      "label": "Description"
    }, 
    "level2": {
      "fields": [
        {
          "column": "Level 2", 
          "datatype": "string", 
          "default_value": "(Undefined)",
          "name": "label"
        }, 
        {
          "datatype": "id", 
          "column": "Level 2",
          "default_value": "undefined",
          "name": "name"
        }
      ], 
      "type": "compound", 
      "description": "Barnet Council Level 2 spending classification", 
      "taxonomy": "barnet-level-2", 
      "label": "Barnet Level 2"
    }, 
    "level1": {
      "fields": [
        {
          "column": "Level 1", 
          "datatype": "string", 
          "name": "label"
        }, 
        {
          "datatype": "id", 
          "column": "Level 1", 
          "name": "name"
        }
      ], 
      "type": "compound", 
      "description": "Barnet Council Level 1 spending classification", 
      "taxonomy": "barnet-level-1", 
      "label": "Barnet Level 1"
    }, 
    "amount": {
      "column": "Amount", 
      "datatype": "float", 
      "type": "measure", 
      "label": "Amount"
    }, 
    "level3": {
      "fields": [
        {
          "column": "Level 3", 
          "datatype": "string", 
          "default_value": "(Undefined)",
          "name": "label"
        }, 
        {
          "datatype": "id", 
          "column": "Level 3", 
          "default_value": "undefined",
          "name": "name"
        }
      ], 
      "type": "compound", 
      "description": "Barnet Council Level 3 spending classification (may be empty)", 
      "taxonomy": "barnet-level-3", 
      "label": "Barnet Level 3"
    }, 
    "time": {
      "column": "Year", 
      "datatype": "date", 
      "type": "date", 
      "label": "Year"
    }, 
    "unique_id": {
      "description": "Unique transaction ID", 
      "column": "unique_id", 
      "label": "Unique ID", 
      "datatype": "string", 
      "key": true, 
      "type": "attribute"
    }
  }, 
  "dataset": {
    "description": "Consolidated spending information from Barnet Borough Council", 
    "temporal_granularity": "year", 
    "schema_version": "2011-11-22", 
    "name": "uk-barnet-budget", 
    "currency": "GBP", 
    "label": "UK Barnet Council budget"
  }
}
