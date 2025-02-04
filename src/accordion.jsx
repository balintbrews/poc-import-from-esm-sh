import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./accordion.module.css";

const AccordionDemo = () => (
  <Accordion.Root
    className={styles.Root}
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className={styles.Item} value="item-1">
      <AccordionTrigger>radix-ui?</AccordionTrigger>
      <AccordionContent>Absolutely!</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={styles.Item} value="item-2">
      <AccordionTrigger>@radix-ui/react-icons?</AccordionTrigger>
      <AccordionContent>Yes.</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={styles.Item} value="item-3">
      <AccordionTrigger>classnames?</AccordionTrigger>
      <AccordionContent>You got it!</AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={styles.Header}>
      <Accordion.Trigger
        className={classNames(styles.Trigger, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className={styles.Chevron} aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(styles.Content, className)}
      {...props}
      ref={forwardedRef}
    >
      <div className={styles.ContentText}>{children}</div>
    </Accordion.Content>
  ),
);

export default AccordionDemo;
