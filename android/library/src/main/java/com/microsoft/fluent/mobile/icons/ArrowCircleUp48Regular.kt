package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleUp48: ImageVector
  get() {
    if (_arrowCircleUp48 != null) {
      return _arrowCircleUp48!!
    }
    _arrowCircleUp48 = fluentIcon(name = "Regular.ArrowCircleUp48", 48f) {
      materialPath {
          moveTo(15.366F, 24.134F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          lineToRelative(5.616F, -5.616F)
          verticalLineTo(32.75F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(18.518F)
          lineToRelative(5.616F, 5.616F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-7.75F, -7.75F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          lineToRelative(-7.75F, 7.75F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          close()
          moveTo(4.0F, 24.0F)
          curveToRelative(0.0F, 11.046F, 8.954F, 20.0F, 20.0F, 20.0F)
          reflectiveCurveToRelative(20.0F, -8.954F, 20.0F, -20.0F)
          reflectiveCurveTo(35.046F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveTo(4.0F, 12.954F, 4.0F, 24.0F)
          close()
          moveToRelative(20.0F, 17.5F)
          curveToRelative(-9.665F, 0.0F, -17.5F, -7.835F, -17.5F, -17.5F)
          reflectiveCurveTo(14.335F, 6.5F, 24.0F, 6.5F)
          reflectiveCurveTo(41.5F, 14.335F, 41.5F, 24.0F)
          reflectiveCurveTo(33.665F, 41.5F, 24.0F, 41.5F)
          close()        
      }
    }
    return _arrowCircleUp48!!
  }

private var _arrowCircleUp48: ImageVector? = null
