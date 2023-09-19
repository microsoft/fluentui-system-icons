package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowAutofitDown20: ImageVector
  get() {
    if (_arrowAutofitDown20 != null) {
      return _arrowAutofitDown20!!
    }
    _arrowAutofitDown20 = fluentIcon(name = "Filled.ArrowAutofitDown20", 20f) {
      materialPath {
          moveTo(15.712F, 14.767F)
          lineToRelative(-0.71F, 0.735F)
          verticalLineTo(2.75F)
          curveToRelative(0.0F, -0.414F, -0.335F, -0.75F, -0.75F, -0.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(12.756F)
          lineToRelative(-0.713F, -0.739F)
          curveToRelative(-0.287F, -0.298F, -0.762F, -0.306F, -1.06F, -0.018F)
          curveToRelative(-0.298F, 0.287F, -0.306F, 0.762F, -0.018F, 1.06F)
          lineToRelative(1.82F, 1.886F)
          curveToRelative(0.394F, 0.407F, 1.046F, 0.407F, 1.44F, 0.0F)
          lineToRelative(1.82F, -1.886F)
          curveToRelative(0.288F, -0.298F, 0.28F, -0.773F, -0.018F, -1.06F)
          curveToRelative(-0.298F, -0.288F, -0.773F, -0.28F, -1.06F, 0.018F)
          close()
          moveTo(5.0F, 17.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.25F)
          curveTo(11.664F, 3.0F, 12.0F, 3.336F, 12.0F, 3.75F)
          reflectiveCurveTo(11.664F, 4.5F, 11.25F, 4.5F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 4.5F, 4.5F, 4.724F, 4.5F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(4.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(9.664F, 17.0F, 9.25F, 17.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _arrowAutofitDown20!!
  }

private var _arrowAutofitDown20: ImageVector? = null
