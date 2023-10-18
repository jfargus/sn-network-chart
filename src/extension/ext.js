import { dimLongDesc } from './strings';

export default function ext() {
  return {
    definition: {
      type: "items",
      component: "accordion",
      items: {
        data: {
          uses: "data",
          items: {
            dimensions: {
              disabledRef: "",
              items: {
                helpDesc: {
                  component: 'text',
                  style: 'qlik-network-chart-italic-property',
                  label: function (properties, handler) {
                    var index;
                    handler.getDimensions().forEach((element, i) => {
                      if (element.qDef.cId === properties.qDef.cId) {
                        index = i;
                      }
                    });
                    return dimLongDesc[index];
                  }
                }
              }
            },
            measures: {
              disabledRef: ""
            }
          }
        },
        sorting: {
          uses: "sorting"
        },
        addons: {
          uses: "addons",
          items: {
            dataHandling: {
              uses: "dataHandling"
            }
          }
        },
        settings: {
          type: "items",
          uses: 'settings',
          items: {
            presentation: {
              type: 'items',
              grouped: false,
              translation: 'properties.presentation',
              items: {
                edgeType: {
                  ref: "edgeType",
                  type: "string",
                  component: "dropdown",
                  label: "Edge Type",
                  options: [
                    { value: 'dynamic' },
                    { value: 'continuous' },
                    { value: 'discrete' },
                    { value: 'diagonalCross' },
                    { value: 'straightCross' },
                    { value: 'horizontal' },
                    { value: 'vertical' },
                    { value: 'curvedCW' },
                    { value: 'curvedCCW' },
                    { value: 'cubicBezier' }
                  ],
                  defaultValue: "dynamic"
                },
                chartDirection: {
                  ref: "chartDirection",
                  type: "string",
                  component: "dropdown",
                  label: "Chart Direction",
                  options: [
                    { value: 'UD' },
                    { value: 'DU' },
                    { value: 'LR' },
                    { value: 'RL' }
                  ],
                  defaultValue: "LR"
                },
                parentCentralization: {
                  ref: "parentCentralization",
                  type: "boolean",
                  component: "switch",
                  label: "Parent Centralization",
                  options: [{
                    value: true,
                    label: "On"
                  }, {
                    value: false,
                    label: "Off"
                  }],
                  defaultValue: false
                },
                displayEdgeLabel: {
                  ref: "displayEdgeLabel",
                  type: "boolean",
                  component: "switch",
                  label: "Display Edge Value",
                  options: [{
                    value: true,
                    label: "On"
                  }, {
                    value: false,
                    label: "Off"
                  }],
                  defaultValue: false
                },
                avoidOverlapSetting: {
                  ref: "avoidOverlapSetting",
                  type: "string",
                  component: "dropdown",
                  label: "Overlap Tolerance",
                  options: [
                    { value: '1' },
                    { value: '2' },
                    { value: '3' },
                    { value: '4' },
                    { value: '5' },
                    { value: '6' },
                    { value: '7' },
                    { value: '8' },
                    { value: '9' },
                    { value: '10' }
                  ],
                  defaultValue: "1"
                },
                posEdgeLabel: {
                  ref: "posEdgeLabel",
                  type: "string",
                  component: "dropdown",
                  label: "Position Edge Label",
                  options: [
                    { value: 'top' }, { value: 'middle' }, { value: 'bottom' }, { value: 'horizontal' }
                  ],
                  defaultValue: "top"
                },
                nodeShape: {
                  ref: "nodeShape",
                  type: "string",
                  component: "dropdown",
                  label: "Node Shape",
                  options: [
                    { value: 'dot' },
                    { value: 'square' },
                    { value: 'star' },
                    { value: 'triangle' },
                    { value: 'triangleDown' },
                    { value: 'diamond' }
                  ],
                  defaultValue: "dot"
                },
                shadowMode: {
                  ref: "shadowMode",
                  type: "boolean",
                  component: "switch",
                  label: "Display Shadow",
                  options: [{
                    value: true,
                    label: "On"
                  }, {
                    value: false,
                    label: "Off"
                  }],
                  defaultValue: false
                }
              }
            }
          }
        },
        about: {
          component: 'items',
          label: 'About',
          items: {
            header: {
              label: 'Network chart',
              style: 'header',
              component: 'text'
            },
            paragraph1: {
              label:
                `Network chart is Qlik Sense chart which
              allows you to draw a network of connected
              nodes and edges from a data set to a sheet.`,
              component: 'text'
            },
            paragraph2: {
              label: 'Network chart is based upon an extension created by Michael Laenen.',
              component: 'text'
            }
          }
        }
      }
    },
    support: {
      export: true,
      snapshot: true,
      exportData: true
    },
    snapshot: {
      canTakeSnapshot: true
    },
  };
}
