document.addEventListener('DOMContentLoaded', (event) => {
    // Get all the icons in the icon-container
    var icons = document.querySelectorAll('#icon_container .tooltip-icon');

    icons.forEach(function(icon) {
        icon.isTooltipShown = false;
    
        icon.addEventListener('click', function(event) {
            event.stopImmediatePropagation(); 
    
            var currentIcon = event.currentTarget;
            
            if (currentIcon.isTooltipShown) {            
                hideTooltip();
                currentIcon.isTooltipShown = false;
            } else {
                showTooltip(currentIcon.id, currentIcon.src, currentIcon.alt, event); 
                currentIcon.isTooltipShown = true;
            }
        });
    });
});


export var tooltips = [
    {
        id: 'button_pipette',
        text: 'A pipette (sometimes spelled as pipet) is a type of laboratory tool commonly used in chemistry and biology to transport a measured volume of liquid, often as a media dispenser.'        
    },    
    {
        id: 'button_multi_channel_pipette',
        text: 'Multi-channel pipettes function in the same way as single-channel pipettes, but they utilise multiple tips for measuring and dispensing equal amounts of liquid at once. Common setups are 8 or 12 channels but 4, 6, 16 and 48 channel sets are also available.'
    },
    {
        id: 'button_eppendorf_tube',
        text: 'Eppendorf Tubes are single-use tubes made from polypropylene for preparing, mixing, centrifuging, transporting and storing solid and liquid samples and reagents.'
    },
    {
        id: 'button_12x10_well_plate',
        text: '96-well plate is a laboratory tool with 96 small wells in an 8x12 grid. It allows for simultaneous testing of multiple samples under the same conditions, facilitating efficient and organized data collection.'
    },
    {
        id: 'button_LB_media',
        text: 'Luria broth (LB) is the most commonly used growth medium for E. coli. It promotes fast growth and provides good plasmid yields, making it an excellent choice for most applications, especially small-scale plasmid preps.'
    }
];

// Function to show a tooltip with the given image and text
export function showTooltip(id, image, text, event) {
    // Get the tooltip container and its elements
    var tooltipContainer = document.getElementById('tooltip_display');
    var tooltipImage = document.getElementById('tooltip-image');
    var tooltipText = document.getElementById('tooltip-text');

    // Check if the tooltip container exists
    if (!tooltipContainer) {
        console.error('tooltip_display not found');
        return;
    }

    // Find the tooltip object for the clicked icon
    var tooltip = tooltips.find(function(t) {
        return t.id === id; 
    });

    // If a tooltip object was found, use its text
    if (tooltip) {
        text = tooltip.text;
    }

    // Update the tooltip's content
    tooltipImage.src = image;
    tooltipText.textContent = text;

    // Show the tooltip
    tooltipContainer.style.display = 'block';
}

// Function to hide the tooltip
export function hideTooltip() {
    // Get the tooltip container
    var tooltipContainer = document.getElementById('tooltip_display');

    // Check if the tooltip container exists
    if (!tooltipContainer) {
        console.error('tooltip_display not found');
        return;
    }

    // Hide the tooltip
    tooltipContainer.style.display = 'none';
}

