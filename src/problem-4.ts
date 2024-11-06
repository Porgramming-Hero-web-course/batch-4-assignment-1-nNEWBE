{
    type Circle = {
        shape: string;
        radius: number;
    }

    type Rectangle = {
        shape: string;
        width: number;
        height: number;
    }

    type calculateShapeArea = Circle | Rectangle;

    const calculateShapeArea = (shape: calculateShapeArea): number => {
        if ("radius" in shape) return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
        else return (shape.width * shape.height);

    }
}