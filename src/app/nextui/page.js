import { Avatar, AvatarGroup, Button, ButtonGroup } from "@nextui-org/react";

export default function nextui() {
    return (
        <>
            <div className="mx-auto">
                <h3 className="text-center my-4 text-3xl">Buttons</h3>

                <Button color="primary" variant="ghost">Click Here</Button>
                <Button color="secondary">Click Here</Button>
                <Button color="danger">Click Here</Button>
                <Button color="success">Click Here</Button>
                <Button color="warning">Click Here</Button>
            </div>

            <div className="mt-5 m-auto">
                <ButtonGroup>
                    <Button color="primary">Click Here</Button>
                    <Button color="secondary">Click Here</Button>
                    <Button color="danger">Click Here</Button>
                    <Button color="success">Click Here</Button>
                    <Button color="warning">Click Here</Button>
                </ButtonGroup>
            </div>

            <div className=" mt-8">
                <h3 className="text-center my-4 text-3xl">Avatar</h3>
                <AvatarGroup max={3} isBordered radius="lg" color="secondary">
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                </AvatarGroup>
                <div className="flex gap-4 items-center justify-center mt-5">
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                    <Avatar isBordered color="primary" radius="lg" src="" fallback name="harsh">harsh</Avatar>
                </div>
            </div>

            <div>
                
            </div>
        </>
    );
}
 