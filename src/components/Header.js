import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from "react";


export const Header = () => {
  return (
    <div className="header">
      <AppBar>
        <Toolbar>
          <Typography>Fortnite Tracker</Typography>
　　　　　<Button>Github</Button>
          <Button>Twitter</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};