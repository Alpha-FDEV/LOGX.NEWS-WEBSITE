function Blocked() {
    return (
      <div className="flex flex-col gap-10 px-6">
        <div>
          <p className="text-base text-gray-600  font-roboto">
            Block tags and sources directly from the feed. Whenever you see a
            post with a tag/source you wish to block, click on the more options
            button (⋮) and choose “Not interested in…“.
          </p>
        </div>
        <BlockedTag />
        <BlockedSources/>
      </div>
    );
}

function BlockedTag() {
    return <div>
        <h1 className="text-gray-900 text-lg font-semibold">Blocked tags</h1>
        <div>
            <p className="text-gray-700 text-base font-medium">
                No blocked tags
            </p>
        </div>
    </div>
}

function BlockedSources() {
    return (
      <div>
        <h1 className="text-gray-900 text-lg font-semibold">Blocked Sources</h1>
        <div>
          <p className="text-gray-700 text-base font-medium">
            No blocked sources
          </p>
        </div>
      </div>
    );
}


export default Blocked
