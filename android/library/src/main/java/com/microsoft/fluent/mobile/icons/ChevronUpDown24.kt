package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronUpDown24: ImageVector
  get() {
    if (_chevronUpDown24 != null) {
      return _chevronUpDown24!!
    }
    _chevronUpDown24 = fluentIcon(name = "Regular.ChevronUpDown24", 24f) {
      materialPath {
          moveTo(12.54F, 2.23F)
          curveTo(12.4F, 2.083F, 12.205F, 2.0F, 12.0F, 2.0F)
          curveToRelative(-0.204F, 0.0F, -0.4F, 0.083F, -0.54F, 0.23F)
          lineToRelative(-6.25F, 6.5F)
          curveToRelative(-0.289F, 0.3F, -0.279F, 0.774F, 0.02F, 1.06F)
          curveToRelative(0.299F, 0.288F, 0.773F, 0.278F, 1.06F, -0.02F)
          lineTo(12.0F, 3.832F)
          lineToRelative(5.71F, 5.938F)
          curveToRelative(0.287F, 0.298F, 0.761F, 0.308F, 1.06F, 0.02F)
          curveToRelative(0.298F, -0.286F, 0.308F, -0.761F, 0.02F, -1.06F)
          lineToRelative(-6.25F, -6.5F)
          close()
          moveToRelative(0.0F, 19.54F)
          curveTo(12.4F, 21.917F, 12.205F, 22.0F, 12.0F, 22.0F)
          curveToRelative(-0.204F, 0.0F, -0.4F, -0.083F, -0.54F, -0.23F)
          lineToRelative(-6.25F, -6.5F)
          curveToRelative(-0.288F, -0.299F, -0.278F, -0.774F, 0.02F, -1.06F)
          curveToRelative(0.299F, -0.288F, 0.773F, -0.278F, 1.06F, 0.02F)
          lineTo(12.0F, 20.168F)
          lineToRelative(5.71F, -5.938F)
          curveToRelative(0.287F, -0.298F, 0.761F, -0.308F, 1.06F, -0.02F)
          curveToRelative(0.298F, 0.286F, 0.308F, 0.761F, 0.02F, 1.06F)
          lineToRelative(-6.25F, 6.5F)
          close()        
      }
    }
    return _chevronUpDown24!!
  }

private var _chevronUpDown24: ImageVector? = null
