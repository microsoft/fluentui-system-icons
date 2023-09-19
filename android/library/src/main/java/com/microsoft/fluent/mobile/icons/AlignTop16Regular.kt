package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.AlignTop16: ImageVector
  get() {
    if (_alignTop16 != null) {
      return _alignTop16!!
    }
    _alignTop16 = fluentIcon(name = "Regular.AlignTop16", 16f) {
      materialPath {
          moveTo(1.5F, 2.0F)
          curveTo(1.224F, 2.0F, 1.0F, 2.224F, 1.0F, 2.5F)
          reflectiveCurveTo(1.224F, 3.0F, 1.5F, 3.0F)
          horizontalLineToRelative(13.0F)
          curveTo(14.776F, 3.0F, 15.0F, 2.776F, 15.0F, 2.5F)
          reflectiveCurveTo(14.776F, 2.0F, 14.5F, 2.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveTo(2.0F, 5.75F)
          curveTo(2.0F, 4.784F, 2.784F, 4.0F, 3.75F, 4.0F)
          horizontalLineToRelative(1.5F)
          curveTo(6.216F, 4.0F, 7.0F, 4.784F, 7.0F, 5.75F)
          verticalLineToRelative(6.5F)
          curveTo(7.0F, 13.216F, 6.216F, 14.0F, 5.25F, 14.0F)
          horizontalLineToRelative(-1.5F)
          curveTo(2.784F, 14.0F, 2.0F, 13.216F, 2.0F, 12.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveTo(3.75F, 5.0F)
          curveTo(3.336F, 5.0F, 3.0F, 5.336F, 3.0F, 5.75F)
          verticalLineToRelative(6.5F)
          curveTo(3.0F, 12.664F, 3.336F, 13.0F, 3.75F, 13.0F)
          horizontalLineToRelative(1.5F)
          curveTo(5.664F, 13.0F, 6.0F, 12.664F, 6.0F, 12.25F)
          verticalLineToRelative(-6.5F)
          curveTo(6.0F, 5.336F, 5.664F, 5.0F, 5.25F, 5.0F)
          horizontalLineToRelative(-1.5F)
          close()
          moveTo(9.0F, 5.75F)
          curveTo(9.0F, 4.784F, 9.784F, 4.0F, 10.75F, 4.0F)
          horizontalLineToRelative(1.5F)
          curveTo(13.216F, 4.0F, 14.0F, 4.784F, 14.0F, 5.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-1.5F)
          curveTo(9.784F, 12.0F, 9.0F, 11.216F, 9.0F, 10.25F)
          verticalLineToRelative(-4.5F)
          close()
          moveTo(10.75F, 5.0F)
          curveTo(10.336F, 5.0F, 10.0F, 5.336F, 10.0F, 5.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-4.5F)
          curveTo(13.0F, 5.336F, 12.664F, 5.0F, 12.25F, 5.0F)
          horizontalLineToRelative(-1.5F)
          close()        
      }
    }
    return _alignTop16!!
  }

private var _alignTop16: ImageVector? = null
