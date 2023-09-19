package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cursor20: ImageVector
  get() {
    if (_cursor20 != null) {
      return _cursor20!!
    }
    _cursor20 = fluentIcon(name = "Filled.Cursor20", 20f) {
      materialPath {
          moveTo(6.636F, 2.287F)
          curveTo(5.983F, 1.749F, 5.0F, 2.213F, 5.0F, 3.059F)
          verticalLineToRelative(13.998F)
          curveToRelative(0.0F, 0.927F, 1.15F, 1.355F, 1.756F, 0.655F)
          lineToRelative(3.524F, -4.073F)
          curveToRelative(0.285F, -0.33F, 0.699F, -0.518F, 1.134F, -0.518F)
          horizontalLineToRelative(5.592F)
          curveToRelative(0.938F, 0.0F, 1.36F, -1.176F, 0.636F, -1.772F)
          lineTo(6.636F, 2.287F)
          close()        
      }
    }
    return _cursor20!!
  }

private var _cursor20: ImageVector? = null
