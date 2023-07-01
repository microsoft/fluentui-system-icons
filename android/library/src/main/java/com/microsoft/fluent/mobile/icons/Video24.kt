package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Video24: ImageVector
  get() {
    if (_video24 != null) {
      return _video24!!
    }
    _video24 = fluentIcon(name = "Regular.Video24", 24f) {
      materialPath {
          moveTo(13.75F, 4.5F)
          curveTo(15.545F, 4.5F, 17.0F, 5.955F, 17.0F, 7.75F)
          verticalLineToRelative(0.173F)
          lineToRelative(3.864F, -2.318F)
          curveToRelative(0.5F, -0.3F, 1.136F, 0.06F, 1.136F, 0.643F)
          verticalLineTo(17.75F)
          curveToRelative(0.0F, 0.583F, -0.636F, 0.943F, -1.136F, 0.643F)
          lineTo(17.0F, 16.075F)
          verticalLineToRelative(0.175F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-8.5F)
          curveTo(3.455F, 19.5F, 2.0F, 18.045F, 2.0F, 16.25F)
          verticalLineToRelative(-8.5F)
          curveTo(2.0F, 5.955F, 3.455F, 4.5F, 5.25F, 4.5F)
          horizontalLineToRelative(8.5F)
          close()
          moveToRelative(0.0F, 1.5F)
          horizontalLineToRelative(-8.5F)
          curveTo(4.284F, 6.0F, 3.5F, 6.784F, 3.5F, 7.75F)
          verticalLineToRelative(8.5F)
          curveTo(3.5F, 17.216F, 4.284F, 18.0F, 5.25F, 18.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-8.5F)
          curveTo(15.5F, 6.784F, 14.716F, 6.0F, 13.75F, 6.0F)
          close()
          moveToRelative(6.75F, 1.573F)
          lineTo(17.0F, 9.674F)
          verticalLineToRelative(4.651F)
          lineToRelative(3.5F, 2.1F)
          verticalLineTo(7.573F)
          close()        
      }
    }
    return _video24!!
  }

private var _video24: ImageVector? = null
