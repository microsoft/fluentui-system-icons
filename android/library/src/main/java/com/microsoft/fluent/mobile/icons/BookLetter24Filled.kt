package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookLetter24: ImageVector
  get() {
    if (_bookLetter24 != null) {
      return _bookLetter24!!
    }
    _bookLetter24 = fluentIcon(name = "Filled.BookLetter24", 24f) {
      materialPath {
          moveTo(12.5F, 8.743F)
          lineToRelative(1.12F, 2.757F)
          horizontalLineToRelative(-2.24F)
          lineToRelative(1.12F, -2.757F)
          close()
          moveTo(4.0F, 4.5F)
          verticalLineToRelative(15.0F)
          curveTo(4.0F, 20.88F, 5.12F, 22.0F, 6.5F, 22.0F)
          horizontalLineToRelative(13.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(6.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          horizontalLineToRelative(14.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.5F)
          curveTo(20.5F, 3.12F, 19.38F, 2.0F, 18.0F, 2.0F)
          horizontalLineTo(6.5F)
          curveTo(5.12F, 2.0F, 4.0F, 3.12F, 4.0F, 4.5F)
          close()
          moveTo(12.5F, 6.0F)
          curveToRelative(0.305F, 0.0F, 0.58F, 0.185F, 0.695F, 0.468F)
          lineToRelative(3.25F, 8.0F)
          curveToRelative(0.156F, 0.383F, -0.029F, 0.82F, -0.413F, 0.977F)
          curveToRelative(-0.383F, 0.156F, -0.82F, -0.029F, -0.977F, -0.413F)
          lineTo(14.23F, 13.0F)
          horizontalLineToRelative(-3.46F)
          lineToRelative(-0.825F, 2.032F)
          curveToRelative(-0.156F, 0.384F, -0.594F, 0.569F, -0.977F, 0.413F)
          curveToRelative(-0.384F, -0.156F, -0.569F, -0.594F, -0.413F, -0.977F)
          lineToRelative(3.25F, -8.0F)
          curveTo(11.92F, 6.185F, 12.195F, 6.0F, 12.5F, 6.0F)
          close()        
      }
    }
    return _bookLetter24!!
  }

private var _bookLetter24: ImageVector? = null
