package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowAutofitUp20: ImageVector
  get() {
    if (_arrowAutofitUp20 != null) {
      return _arrowAutofitUp20!!
    }
    _arrowAutofitUp20 = fluentIcon(name = "Filled.ArrowAutofitUp20", 20f) {
      materialPath {
          moveTo(15.712F, 5.233F)
          lineToRelative(-0.71F, -0.735F)
          verticalLineTo(17.25F)
          curveToRelative(0.0F, 0.414F, -0.335F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(4.494F)
          lineTo(12.79F, 5.233F)
          curveToRelative(-0.287F, 0.298F, -0.762F, 0.306F, -1.06F, 0.018F)
          curveToRelative(-0.298F, -0.287F, -0.306F, -0.762F, -0.018F, -1.06F)
          lineToRelative(1.82F, -1.886F)
          curveToRelative(0.394F, -0.407F, 1.046F, -0.407F, 1.44F, 0.0F)
          lineToRelative(1.82F, 1.886F)
          curveToRelative(0.288F, 0.298F, 0.28F, 0.773F, -0.018F, 1.06F)
          curveToRelative(-0.298F, 0.288F, -0.773F, 0.28F, -1.06F, -0.018F)
          close()
          moveTo(5.0F, 3.0F)
          curveTo(3.895F, 3.0F, 3.0F, 3.895F, 3.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(4.25F)
          curveTo(9.664F, 4.5F, 10.0F, 4.164F, 10.0F, 3.75F)
          reflectiveCurveTo(9.664F, 3.0F, 9.25F, 3.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _arrowAutofitUp20!!
  }

private var _arrowAutofitUp20: ImageVector? = null
