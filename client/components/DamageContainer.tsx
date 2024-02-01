"use client";
import {Progress} from "@nextui-org/react";

const DamageContainer = ({damage, maxDamage}: {damage: number, maxDamage: number}) => {
    const value = (damage / maxDamage) * 100;
    return (
            <Progress 
            aria-label="damage" 
            label={`${damage}`}
            value={value}
            size="sm"
            classNames={{
                label: "text-white text-xs",
            }}
            className=""
            />
    );
}

export default DamageContainer;