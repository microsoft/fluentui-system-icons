package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Video24: ImageVector
  get() {
    if (_video24 != null) {
      return _video24!!
    }
    _video24 = fluentIcon(name = "Filled.Video24", 24f) {
      materialPath {
          moveTo(16.0F, 16.25F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(3.455F, 19.5F, 2.0F, 18.045F, 2.0F, 16.25F)
          verticalLineToRelative(-8.5F)
          curveTo(2.0F, 5.955F, 3.455F, 4.5F, 5.25F, 4.5F)
          horizontalLineToRelative(7.5F)
          curveTo(14.545F, 4.5F, 16.0F, 5.955F, 16.0F, 7.75F)
          verticalLineToRelative(8.5F)
          close()
          moveToRelative(5.762F, -10.357F)
          curveTo(21.916F, 6.074F, 22.0F, 6.303F, 22.0F, 6.541F)
          verticalLineToRelative(10.918F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          curveToRelative(-0.237F, 0.0F, -0.467F, -0.085F, -0.648F, -0.238F)
          lineTo(17.0F, 15.37F)
          verticalLineTo(8.628F)
          lineToRelative(3.352F, -2.849F)
          curveToRelative(0.421F, -0.358F, 1.052F, -0.306F, 1.41F, 0.114F)
          close()        
      }
    }
    return _video24!!
  }

private var _video24: ImageVector? = null
