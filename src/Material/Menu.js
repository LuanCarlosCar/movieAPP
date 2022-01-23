import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {ContainerMenuLateral} from './styled'
import Logo from '../assets/img/Naped.svg'
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <ContainerMenuLateral>
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sx={{
            fontSize: 40,
       
            
          }}
        >
         <MenuIcon />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >

                    <MenuItem onClick={handleClose} sx={{
                      fontSize: 30,
                      color: 'black'
                      
                    }}><Link href='/'><a>Marvel</a></Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{
                      fontSize: 30,
                      color: 'black'
                      
                    }}><Link href='/dc'><a>DC</a></Link></MenuItem>
                    <MenuItem onClick={handleClose} sx={{
                      fontSize: 30,
                      color: 'black'
                      
                    }}>Filmes</MenuItem>
                    <MenuItem onClick={handleClose} sx={{
                      fontSize: 30,
                      color: 'black'
                      
                    }}>Animes</MenuItem>
                    <MenuItem onClick={handleClose} sx={{
                      fontSize: 30,
                      color: 'black'
                      
                    }}>Games</MenuItem>
                    <MenuItem onClick={handleClose} sx={{
                      fontSize: 30,
                      color: '#8257E6',
                      
                      
                    }}>Cadastrar</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
    <span>
    <Image src={Logo} />
    </span>
    
    </ContainerMenuLateral>
  );
}
