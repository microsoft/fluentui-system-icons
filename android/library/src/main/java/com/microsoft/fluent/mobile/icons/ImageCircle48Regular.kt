package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ImageCircle48: ImageVector
  get() {
    if (_imageCircle48 != null) {
      return _imageCircle48!!
    }
    _imageCircle48 = fluentIcon(name = "Regular.ImageCircle48", 48f) {
      materialPath {
          moveTo(24.0F, 6.5F)
          curveTo(14.335F, 6.5F, 6.5F, 14.335F, 6.5F, 24.0F)
          curveToRelative(0.0F, 4.45F, 1.66F, 8.51F, 4.395F, 11.599F)
          lineToRelative(10.637F, -10.58F)
          curveToRelative(1.365F, -1.358F, 3.571F, -1.358F, 4.936F, 0.0F)
          lineToRelative(10.637F, 10.58F)
          curveTo(39.84F, 32.51F, 41.5F, 28.449F, 41.5F, 24.0F)
          curveToRelative(0.0F, -9.665F, -7.835F, -17.5F, -17.5F, -17.5F)
          close()
          moveToRelative(11.318F, 30.848F)
          lineTo(24.705F, 26.79F)
          curveToRelative(-0.39F, -0.388F, -1.02F, -0.388F, -1.41F, 0.0F)
          lineTo(12.682F, 37.348F)
          curveTo(15.733F, 39.938F, 19.684F, 41.5F, 24.0F, 41.5F)
          reflectiveCurveToRelative(8.267F, -1.562F, 11.318F, -4.152F)
          close()
          moveTo(4.0F, 24.0F)
          curveTo(4.0F, 12.954F, 12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          close()
          moveToRelative(26.5F, -4.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(32.985F, 13.0F, 30.5F, 13.0F)
          reflectiveCurveTo(26.0F, 15.015F, 26.0F, 17.5F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          close()        
      }
    }
    return _imageCircle48!!
  }

private var _imageCircle48: ImageVector? = null
