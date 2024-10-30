const icons = document.querySelectorAll('.movable-icon');

icons.forEach(icon => {
    icon.addEventListener('mousedown', onMouseDown);

    function onMouseDown(e) {
        const iconRect = icon.getBoundingClientRect();
        const offsetX = e.clientX - (iconRect.left + iconRect.width / 2);
        const offsetY = e.clientY - (iconRect.top + iconRect.height / 2);

        // Define a posição do ícone como absoluta
        icon.style.position = 'absolute';

        function onMouseMove(e) {
            icon.style.left = `${e.clientX - offsetX}px`;
            icon.style.top = `${e.clientY - offsetY}px`;
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});