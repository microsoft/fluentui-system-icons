package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSquareUpRight24: ImageVector
  get() {
    if (_arrowSquareUpRight24 != null) {
      return _arrowSquareUpRight24!!
    }
    _arrowSquareUpRight24 = fluentIcon(name = "Regular.ArrowSquareUpRight24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          close()
          moveTo(4.5F, 6.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(6.25F)
          close()
          moveTo(8.75F, 9.5F)
          horizontalLineToRelative(4.74F)
          lineToRelative(-5.268F, 5.217F)
          curveToRelative(-0.294F, 0.292F, -0.296F, 0.766F, -0.005F, 1.06F)
          curveToRelative(0.292F, 0.295F, 0.766F, 0.297F, 1.06F, 0.006F)
          lineToRelative(5.223F, -5.172F)
          verticalLineToRelative(4.639F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(16.0F, 15.664F, 16.0F, 15.25F)
          verticalLineToRelative(-6.5F)
          curveTo(16.0F, 8.336F, 15.664F, 8.0F, 15.25F, 8.0F)
          horizontalLineToRelative(-6.5F)
          curveTo(8.336F, 8.0F, 8.0F, 8.336F, 8.0F, 8.75F)
          reflectiveCurveTo(8.336F, 9.5F, 8.75F, 9.5F)
          close()        
      }
    }
    return _arrowSquareUpRight24!!
  }

private var _arrowSquareUpRight24: ImageVector? = null
