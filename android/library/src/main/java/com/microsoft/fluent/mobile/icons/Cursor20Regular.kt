package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Cursor20: ImageVector
  get() {
    if (_cursor20 != null) {
      return _cursor20!!
    }
    _cursor20 = fluentIcon(name = "Regular.Cursor20", 20f) {
      materialPath {
          moveTo(5.0F, 3.058F)
          curveToRelative(0.0F, -0.845F, 0.983F, -1.308F, 1.636F, -0.77F)
          lineToRelative(11.006F, 9.062F)
          curveToRelative(0.724F, 0.596F, 0.302F, 1.772F, -0.636F, 1.772F)
          horizontalLineToRelative(-5.592F)
          curveToRelative(-0.435F, 0.0F, -0.85F, 0.189F, -1.134F, 0.518F)
          lineToRelative(-3.524F, 4.073F)
          curveTo(6.15F, 18.412F, 5.0F, 17.983F, 5.0F, 17.057F)
          verticalLineTo(3.06F)
          close()
          moveToRelative(12.006F, 9.063F)
          lineTo(6.0F, 3.058F)
          verticalLineToRelative(14.0F)
          lineToRelative(3.524F, -4.073F)
          curveToRelative(0.475F, -0.549F, 1.165F, -0.864F, 1.89F, -0.864F)
          horizontalLineToRelative(5.592F)
          close()        
      }
    }
    return _cursor20!!
  }

private var _cursor20: ImageVector? = null
