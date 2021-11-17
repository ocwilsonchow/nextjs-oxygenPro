import React from "react";
import Link from "next/link";
import {Button} from "@chakra-ui/react"

function dynamic() {
  return (
    <div>
      <h1>dynamic slug page</h1>
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}

export default dynamic;
