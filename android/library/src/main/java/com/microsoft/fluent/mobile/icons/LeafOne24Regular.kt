package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LeafOne24: ImageVector
  get() {
    if (_leafOne24 != null) {
      return _leafOne24!!
    }
    _leafOne24 = fluentIcon(name = "Regular.LeafOne24", 24f) {
      materialPath {
          moveTo(13.238F, 3.272F)
          curveToRelative(-0.684F, -0.683F, -1.792F, -0.683F, -2.475F, 0.0F)
          lineTo(7.05F, 6.984F)
          curveToRelative(-2.733F, 2.733F, -2.733F, 7.164F, 0.0F, 9.897F)
          curveToRelative(1.176F, 1.176F, 2.665F, 1.846F, 4.199F, 2.01F)
          verticalLineToRelative(2.359F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-2.36F)
          curveToRelative(1.534F, -0.164F, 3.023F, -0.834F, 4.199F, -2.01F)
          curveToRelative(2.733F, -2.733F, 2.733F, -7.164F, 0.0F, -9.897F)
          lineToRelative(-3.712F, -3.712F)
          close()
          moveTo(12.75F, 17.38F)
          verticalLineToRelative(-5.63F)
          curveToRelative(0.0F, -0.415F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.335F, -0.75F, 0.75F)
          verticalLineToRelative(5.63F)
          curveToRelative(-1.148F, -0.157F, -2.256F, -0.677F, -3.138F, -1.56F)
          curveToRelative(-2.147F, -2.147F, -2.147F, -5.628F, 0.0F, -7.776F)
          lineToRelative(3.711F, -3.711F)
          curveToRelative(0.098F, -0.098F, 0.256F, -0.098F, 0.354F, 0.0F)
          lineToRelative(3.711F, 3.711F)
          curveToRelative(2.147F, 2.148F, 2.147F, 5.63F, 0.0F, 7.777F)
          curveToRelative(-0.882F, 0.882F, -1.99F, 1.402F, -3.138F, 1.56F)
          close()        
      }
    }
    return _leafOne24!!
  }

private var _leafOne24: ImageVector? = null
