package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Flash32: ImageVector
  get() {
    if (_flash32 != null) {
      return _flash32!!
    }
    _flash32 = fluentIcon(name = "Filled.Flash32", 32f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(-0.86F, 0.0F, -1.625F, 0.55F, -1.897F, 1.368F)
          lineToRelative(-4.0F, 12.0F)
          curveToRelative(-0.204F, 0.61F, -0.101F, 1.28F, 0.275F, 1.801F)
          curveTo(6.753F, 17.691F, 7.357F, 18.0F, 8.0F, 18.0F)
          horizontalLineToRelative(2.415F)
          lineToRelative(-2.287F, 8.825F)
          curveToRelative(-0.671F, 2.587F, 2.64F, 4.28F, 4.345F, 2.222F)
          lineTo(25.54F, 13.276F)
          curveToRelative(0.495F, -0.597F, 0.6F, -1.425F, 0.27F, -2.127F)
          curveTo(25.48F, 10.448F, 24.775F, 10.0F, 24.0F, 10.0F)
          horizontalLineToRelative(-3.114F)
          lineToRelative(1.987F, -5.298F)
          curveToRelative(0.23F, -0.614F, 0.144F, -1.302F, -0.23F, -1.841F)
          curveTo(22.27F, 2.32F, 21.657F, 2.0F, 21.0F, 2.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _flash32!!
  }

private var _flash32: ImageVector? = null
