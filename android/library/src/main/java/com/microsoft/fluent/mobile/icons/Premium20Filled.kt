package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Premium20: ImageVector
  get() {
    if (_premium20 != null) {
      return _premium20!!
    }
    _premium20 = fluentIcon(name = "Filled.Premium20", 20f) {
      materialPath {
          moveTo(5.5F, 2.75F)
          curveToRelative(-0.274F, 0.0F, -0.525F, 0.149F, -0.657F, 0.389F)
          lineToRelative(-2.75F, 5.0F)
          curveToRelative(-0.149F, 0.27F, -0.117F, 0.602F, 0.08F, 0.84F)
          lineToRelative(7.25F, 8.75F)
          curveTo(9.564F, 17.9F, 9.776F, 18.0F, 10.0F, 18.0F)
          curveToRelative(0.223F, 0.0F, 0.435F, -0.1F, 0.578F, -0.271F)
          lineToRelative(7.25F, -8.75F)
          curveToRelative(0.196F, -0.238F, 0.228F, -0.57F, 0.08F, -0.84F)
          lineToRelative(-2.75F, -5.0F)
          curveTo(15.024F, 2.899F, 14.773F, 2.75F, 14.5F, 2.75F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(4.156F, 7.5F)
          lineToRelative(1.788F, -3.25F)
          horizontalLineToRelative(1.499F)
          lineTo(6.305F, 7.5F)
          horizontalLineTo(4.156F)
          close()
          moveTo(6.144F, 9.0F)
          lineToRelative(1.928F, 4.748F)
          lineTo(4.138F, 9.0F)
          horizontalLineToRelative(2.006F)
          close()
          moveToRelative(3.845F, 5.481F)
          lineTo(7.763F, 9.0F)
          horizontalLineToRelative(4.386F)
          lineToRelative(-2.16F, 5.481F)
          close()
          moveTo(7.895F, 7.5F)
          lineToRelative(1.137F, -3.25F)
          horizontalLineToRelative(1.945F)
          lineToRelative(1.197F, 3.25F)
          horizontalLineToRelative(-4.28F)
          close()
          moveToRelative(5.878F, 0.0F)
          lineToRelative(-1.197F, -3.25F)
          horizontalLineToRelative(1.48F)
          lineToRelative(1.788F, 3.25F)
          horizontalLineToRelative(-2.071F)
          close()
          moveTo(13.761F, 9.0F)
          horizontalLineToRelative(2.1F)
          lineToRelative(-4.005F, 4.834F)
          lineTo(13.761F, 9.0F)
          close()        
      }
    }
    return _premium20!!
  }

private var _premium20: ImageVector? = null
