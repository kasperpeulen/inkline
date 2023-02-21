export const manifest = {
    name: 'ILayout',
    props: [
        {
            name: 'vertical',
            type: ['Boolean'],
            default: 'false',
            description: 'Display the layout on a vertical orientation'
        }
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: 'Slot for default layout content '
        }
    ],
    css: {
        selector: '.layout',
        variables: []
    }
};

export default manifest;
