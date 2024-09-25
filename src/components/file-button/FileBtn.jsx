import { useState } from "react";
import { FileButton, Button, Group, Text } from "@mantine/core";

export default function FileBtn({ title, width }) {
  return (
    <>
      <Group justify="center">
        <FileButton accept="image/png,image/jpeg">
          {(props) =>
            width === true ? (
              <Button {...props} fullWidth>
                {title}
              </Button>
            ) : (
              <Button {...props}>{title}</Button>
            )
          }
        </FileButton>
      </Group>
    </>
  );
}
