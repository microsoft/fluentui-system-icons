package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DesktopCursor20: ImageVector
  get() {
    if (_desktopCursor20 != null) {
      return _desktopCursor20!!
    }
    _desktopCursor20 = fluentIcon(name = "Regular.DesktopCursor20", 20f) {
      materialPath {
          moveTo(4.0F, 2.0F)
          curveTo(2.895F, 2.0F, 2.0F, 2.895F, 2.0F, 4.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 17.0F, 5.0F, 17.224F, 5.0F, 17.5F)
          reflectiveCurveTo(5.224F, 18.0F, 5.5F, 18.0F)
          horizontalLineTo(11.0F)
          lineToRelative(0.001F, -1.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(3.002F)
          lineToRelative(0.001F, -1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(8.843F)
          lineToRelative(0.872F, 0.864F)
          curveTo(17.954F, 13.487F, 18.0F, 13.249F, 18.0F, 13.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(8.857F, 8.146F)
          curveToRelative(-0.143F, -0.142F, -0.358F, -0.184F, -0.544F, -0.107F)
          curveToRelative(-0.187F, 0.078F, -0.308F, 0.26F, -0.308F, 0.462F)
          lineTo(12.0F, 18.498F)
          curveToRelative(0.0F, 0.215F, 0.138F, 0.406F, 0.342F, 0.474F)
          curveToRelative(0.204F, 0.069F, 0.428F, -0.001F, 0.558F, -0.173F)
          lineToRelative(1.995F, -2.647F)
          lineToRelative(3.496F, 0.776F)
          curveToRelative(0.218F, 0.049F, 0.44F, -0.053F, 0.548F, -0.248F)
          curveToRelative(0.106F, -0.196F, 0.07F, -0.438F, -0.087F, -0.595F)
          lineToRelative(-5.995F, -5.94F)
          close()        
      }
    }
    return _desktopCursor20!!
  }

private var _desktopCursor20: ImageVector? = null
