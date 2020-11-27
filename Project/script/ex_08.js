$("#layers").sortable({
    update: function(event, ui) {
        $("canvas").detach(); // Removes all canvases
        $("#layers canvas").each(function() {
            // Reinsert them in the same order of your list items
            $("#" + $(this).data("canvas")).appendTo(whereYourCanvasesWere);
        });
    }
}).disableSelection();