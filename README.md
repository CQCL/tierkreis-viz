# Tierkreis Graph Visualizer

## Running the visualizer 
### 🐋 Docker
```bash
docker build -t tierkreis-viz .
docker run -it -p 3000:3000 --rm tierkreis-viz # Runs on port 3000.
```
### ⬣ Node
Make sure you are using [node](https://nodejs.org/en) v16.8 or higher.
```bash
npm i
npm run build
npm run start
```


## Using the vizualizer
`tierkreis/examples/viz_demo.ipynb` and `tierkreis/examples/variational-viz.ipynb` contain a few example notebooks to get started. Connecting to the vizualiser requires instrumenting tierkreis with the VizRuntime plugin. 
```python
from tierkreis.pyruntime.python_runtime import VizRuntime
...
cl = VizRuntime("http://localhost:3000", [test_worker.main.root, ...])
...
```
The visualizer responds to 3 different commands.
```python
cl.viz_graph(graph) # Renders the graph in the vizualizer.
cl.type_check_graph(graph) # Highlights nodes which have type errors.
cl.run_graph(graph) # Shows the runtime state of the graph during execution.
```
<img width="1512" alt="Screenshot 2023-07-20 at 00 04 03" src="https://github.com/CQCL/tierkreis-viz/assets/104831665/55ad9508-60d9-4228-a855-1d2c648d7f51">


> **⚠️ Note:**
> Runtime updates are not currently supported for nested graphs (box types). We recommend unboxing nested graphs if you would like accurate visual runtime updates.

## Development
This visualizer is built with [React](https://react.dev/), [NextJS 13](https://nextjs.org/) and [Typescript](https://www.typescriptlang.org/).
```bash
npm run dev # Runs vizualizer in development mode.
```
See [NextJS docs](https://nextjs.org/docs) for more information.

#### Updating grpc client code
`generateTSDecoders.sh` generates grpc client code in `src/grpcjs/proto/v1alpha` based on the proto definitions in `tierkreis/protos/v1alpha`. The grpc client code is used to deserialize incoming tierkreis `Graph`, `TypeErrors` and `OutputStream` binaries.
