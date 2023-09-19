package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Cursor24: ImageVector
  get() {
    if (_cursor24 != null) {
      return _cursor24!!
    }
    _cursor24 = fluentIcon(name = "Regular.Cursor24", 24f) {
      materialPath {
          moveTo(5.5F, 3.483F)
          curveToRelative(0.0F, -1.248F, 1.436F, -1.95F, 2.421F, -1.184F)
          lineToRelative(13.514F, 10.513F)
          curveToRelative(1.128F, 0.877F, 0.508F, 2.684F, -0.92F, 2.684F)
          horizontalLineToRelative(-6.853F)
          curveToRelative(-0.505F, 0.0F, -0.981F, 0.23F, -1.294F, 0.626F)
          lineToRelative(-4.191F, 5.3F)
          curveTo(7.295F, 22.538F, 5.5F, 21.914F, 5.5F, 20.492F)
          verticalLineTo(3.483F)
          close()
          moveToRelative(15.014F, 10.513F)
          lineTo(7.0F, 3.483F)
          verticalLineToRelative(17.009F)
          lineToRelative(4.191F, -5.3F)
          curveToRelative(0.597F, -0.756F, 1.508F, -1.196F, 2.47F, -1.196F)
          horizontalLineToRelative(6.853F)
          close()        
      }
    }
    return _cursor24!!
  }

private var _cursor24: ImageVector? = null
