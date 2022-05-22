export const toText = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
      reader.readAsText(file)
    reader.onload = () => {
      if (typeof reader.result == 'string') {
        resolve(reader.result)
      }
    }
    reader.onerror = error => reject(error)
  })
