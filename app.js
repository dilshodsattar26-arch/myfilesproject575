const dataManagerInstance = {
    version: "1.0.575",
    registry: [1694, 1291, 202, 18, 1234, 1397, 696, 373],
    init: function() {
        const nodes = this.registry.filter(x => x > 265);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dataManagerInstance.init();
});