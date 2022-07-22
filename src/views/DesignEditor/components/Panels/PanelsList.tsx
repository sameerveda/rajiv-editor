import { useStyletron } from "baseui"
import { panelListItems } from "~/constants/app-options"
import useAppContext from "~/hooks/useAppContext"
import { styled } from "baseui"
import { useEditor } from "@scenify/react"
import Icons from "~/components/Icons"
import { useTranslation } from "react-i18next"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"

const Container = styled("div", (props) => ({
  width: "80px",
  backgroundColor: props.$theme.colors.primary100,
}))

function PanelsList() {
  const { activePanel } = useAppContext()
  const { t } = useTranslation("editor")

  return (
    <Container>
      {panelListItems.map((panelListItem) => (
        <PanelListItem
          label={t(`panels.panelsList.${panelListItem.id}`)}
          name={panelListItem.name}
          key={panelListItem.name}
          icon={panelListItem.name}
          activePanel={activePanel}
        />
      ))}
    </Container>
  )
}

function PanelListItem({ label, icon, activePanel, name }: any) {
  const { setActivePanel } = useAppContext()
  const setIsSidebarOpen = useSetIsSidebarOpen()
  const editor = useEditor()
  const [css, theme] = useStyletron()
  // @ts-ignore
  const Icon = Icons[icon]
  return (
    <div
      onClick={() => {
        setIsSidebarOpen(true)
        setActivePanel(name)
      }}
      className={css({
        width: "80px",
        height: "80px",
        backgroundColor: name === activePanel ? theme.colors.white : theme.colors.primary100,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "Uber Move Text",
        fontWeight: 500,
        fontSize: "0.8rem",
        userSelect: "none",
        transition: "all 0.5s",
        gap: "0.1rem",
        ":hover": {
          cursor: "pointer",
          backgroundColor: theme.colors.white,
          transition: "all 1s",
        },
      })}
    >
      <Icon size={24} />
      <div>{label}</div>
    </div>
  )
}

export default PanelsList