package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatDismiss16: ImageVector
  get() {
    if (_chatDismiss16 != null) {
      return _chatDismiss16!!
    }
    _chatDismiss16 = fluentIcon(name = "Filled.ChatDismiss16", 16f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          curveToRelative(-1.094F, 0.0F, -2.12F, -0.293F, -3.004F, -0.805F)
          lineToRelative(-2.338F, 0.78F)
          curveToRelative(-0.176F, 0.058F, -0.37F, 0.014F, -0.504F, -0.114F)
          reflectiveCurveToRelative(-0.186F, -0.32F, -0.135F, -0.498F)
          lineToRelative(0.712F, -2.491F)
          curveTo(2.265F, 10.019F, 2.0F, 9.04F, 2.0F, 8.0F)
          close()
          moveToRelative(3.896F, -2.104F)
          lineTo(5.84F, 5.966F)
          curveTo(5.704F, 6.16F, 5.723F, 6.43F, 5.896F, 6.604F)
          lineTo(7.293F, 8.0F)
          lineTo(5.896F, 9.396F)
          lineTo(5.84F, 9.466F)
          curveTo(5.704F, 9.66F, 5.723F, 9.93F, 5.896F, 10.104F)
          lineToRelative(0.07F, 0.057F)
          curveToRelative(0.195F, 0.135F, 0.464F, 0.116F, 0.638F, -0.057F)
          lineTo(8.0F, 8.707F)
          lineToRelative(1.396F, 1.397F)
          lineToRelative(0.07F, 0.057F)
          curveToRelative(0.195F, 0.135F, 0.464F, 0.116F, 0.638F, -0.057F)
          lineToRelative(0.057F, -0.07F)
          curveToRelative(0.135F, -0.195F, 0.116F, -0.464F, -0.057F, -0.638F)
          lineTo(8.707F, 8.0F)
          lineToRelative(1.397F, -1.396F)
          lineToRelative(0.057F, -0.07F)
          curveToRelative(0.135F, -0.195F, 0.116F, -0.464F, -0.057F, -0.638F)
          lineToRelative(-0.07F, -0.057F)
          curveTo(9.84F, 5.704F, 9.57F, 5.723F, 9.396F, 5.896F)
          lineTo(8.0F, 7.293F)
          lineTo(6.604F, 5.896F)
          lineTo(6.534F, 5.84F)
          curveTo(6.34F, 5.704F, 6.07F, 5.723F, 5.896F, 5.896F)
          close()        
      }
    }
    return _chatDismiss16!!
  }

private var _chatDismiss16: ImageVector? = null
