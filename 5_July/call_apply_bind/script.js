const parent = document.querySelector('#parent')

parent.addEventListener('click',(event)=>{
    console.log(event)
    if(event.target.id == 'laptops'){
        window.location.href = 'https://www.google.com/search?q=laptops&oq=laptops&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORixAxjJAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDIKCAUQABixAxiABDINCAYQABiSAxiABBiKBTIHCAcQABiABDIHCAgQABiABDIHCAkQABiPAtIBCDE2OTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
    }
    else if(event.target.id == 'cameras'){
        window.location.href = 'https://www.google.com/search?q=camera&oq=camera&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIKCAEQABixAxiABDINCAIQABiDARixAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDIKCAUQABixAxiABDIHCAYQABiABDIKCAcQABixAxiABDINCAgQABixAxiABBiKBTIKCAkQABixAxiABNIBCDI1MjVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
    }
    else if(event.target.id == 'mobiles'){
        window.location.href = 'https://www.google.com/search?q=smaertphones&sca_esv=d63fd8e2c0ae4fdc&sca_upv=1&ei=Qw6IZt6oLv3hseMPp7a4sA4&ved=0ahUKEwie1qXdmJCHAxX9cGwGHScbDuYQ4dUDCA8&uact=5&oq=smaertphones&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHNtYWVydHBob25lczINEAAYgAQYsQMYgwEYDTIKEAAYgAQYsQMYDTIKEAAYgAQYsQMYDTIKEAAYgAQYsQMYDTIKEAAYgAQYsQMYDTIKEAAYgAQYsQMYDTIKEAAYgAQYsQMYDTINEAAYgAQYsQMYgwEYDTIKEAAYgAQYsQMYDTIKEAAYgAQYsQMYDUjjM1CkEViqMXABeAKQAQSYAdgBoAHfFKoBBjAuMTUuMrgBA8gBAPgBAZgCD6AC1RCoAhTCAgQQABhHwgIQEAAYgAQYsQMYQxiDARiKBcICCBAAGIAEGLEDwgIOEC4YgAQYxwEYjgUYrwHCAg0QABiABBixAxhDGIoFwgIIEAAYgAQYyQPCAgsQABiABBiSAxiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAhMQABiABBhDGLQCGIoFGOoC2AEBwgITEC4YgAQYQxi0AhiKBRjqAtgBAcICFBAAGIAEGOMEGLQCGOkEGOoC2AEBwgIaEC4YgAQY0QMY4wQYtAIYxwEY6QQY6gLYAQHCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AECwgIQEC4YgAQY0QMYQxjHARiKBcICChAAGIAEGEMYigXCAhEQLhiABBixAxjRAxiDARjHAcICHxAuGIAEGNEDGEMYxwEYigUYlwUY3AQY3gQY4ATYAQPCAg0QLhiABBhDGOUEGIoFwgIREC4YgAQYsQMYxwEYjgUYrwHCAg0QABiABBixAxiDARgKwgIHEAAYgAQYCsICChAAGIAEGLEDGAqYAwuIBgGQBgi6BgQIARgHugYGCAIQARgKugYGCAMQARgUkgcGMi4xMC4zoAeQnQE&sclient=gws-wiz-serp'
    }
else if(event.target.id == 'ipads'){
    window.location.href = 'https://www.google.com/search?q=ipads&sca_esv=d63fd8e2c0ae4fdc&sca_upv=1&ei=TQ6IZtGQEc2fseMP2MekQA&ved=0ahUKEwiR6-rhmJCHAxXNT2wGHdgjCQgQ4dUDCA8&uact=5&oq=ipads&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWlwYWRzMhAQABiABBixAxhDGMkDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMhAQLhiABBixAxhDGOUEGIoFMg0QABiABBixAxhDGIoFMhAQLhiABBixAxhDGOUEGIoFMgUQABiABDILEAAYgAQYkgMYigUyBRAAGIAEMgUQABiABEiRH1DwCFi3HHADeAGQAQCYAZYBoAGoBaoBAzAuNbgBA8gBAPgBAZgCCKAC7QWoAgrCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICExAAGIAEGEMYtAIYigUY6gLYAQHCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AECwgINEC4YgAQYQxjlBBiKBcICCxAuGIAEGLEDGOUEwgILEAAYgAQYsQMYgwHCAgUQLhiABMICERAuGIAEGLEDGNEDGIMBGMcBwgIcEC4YgAQYQxjlBBiKBRiXBRjcBBjeBBjgBNgBA8ICChAAGIAEGEMYigXCAh8QLhiABBixAxhDGOUEGIoFGJcFGNwEGN4EGOAE2AEDwgIOEC4YgAQYsQMYgwEY5QSYAwziAwUSATEgQIgGAZAGCroGBAgBGAe6BgQIAhgKugYGCAMQARgUkgcDMy41oAedTw&sclient=gws-wiz-serp'
}
})